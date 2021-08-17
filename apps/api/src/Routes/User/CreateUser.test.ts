import {
  createResponseMock,
  mockRouteHandler,
  createRequestMock,
  asMock,
} from "Utils/mockUtils";
import expectStatus from "Utils/expectStatus";
import UserRepository from "Repository/UserRepository";
import User from "Entities/User";
import CreateUser from "./CreateUser";
import { RouteHandler } from "Utils/routeHandler";
import { Req } from "Utils/request";
import { UserInfo } from "./utils/userReqSchema";

describe.skip("CreateUser Route Handler", () => {
  let UserRepo: UserRepository;
  let createUserRoute: RouteHandler<Req<UserInfo>>;
  let mockTable: User[] = [];

  beforeAll(() => {
    UserRepo = new UserRepository();
    createUserRoute = CreateUser({ UserRepo });

    jest.spyOn(UserRepo, "create").mockImplementation((info) => {
      const user = { ...info, id: `${info.password}` } as User;

      mockTable.push(user);

      return user;
    });

    jest.spyOn(UserRepo, "save").mockReturnValue(Promise.resolve({} as User));

    jest
      .spyOn(UserRepo, "generateHash")
      .mockImplementation((password) => Promise.resolve(password));

    jest
      .spyOn(UserRepo, "findByEmail")
      .mockImplementation((email) =>
        Promise.resolve(mockTable.find((findUser) => findUser.email === email))
      );
  });

  beforeEach(() => {
    asMock(UserRepo.create).mockClear();
    asMock(UserRepo.save).mockClear();
    mockTable = [];
  });

  it("it should be able to create a new user in the database table", async () => {
    const userInfo: UserInfo = {
      artist: { name: "john doe" },
      email: "johndoe@hotmail.com",
      password: "123456",
    } as UserInfo

    const response = createResponseMock();
    const request = createRequestMock(userInfo);

    await mockRouteHandler(createUserRoute, request, response);

    expectStatus(201, expect, response);
    expect(UserRepo.create).toHaveBeenCalledWith(userInfo);
    expect(mockTable.length).toBe(1);
    expect(mockTable[0]).toMatchObject(userInfo);
  });

  it("should not be able to create a new user in the database table missing some field in request body", async () => {
    const userInfo: UserInfo = {
      name: "john doe",
      email: "johndoe@hotmail.com",
    } as any as UserInfo

    const response = createResponseMock();
    const request = createRequestMock(userInfo);

    await mockRouteHandler(createUserRoute, request, response);

    expect(mockTable.length).toBe(0);
    expectStatus(400, expect, response);
  });

  it("should not be able to create in the database table a user with same email from another", async () => {
    UserRepo.create({
      email: "johndoe@hotmail.com",
      password: "123456",
    });

    const user: UserInfo = {
      name: "FakeName",
      email: "johndoe@hotmail.com",
      password: "123456",
    } as any as UserInfo

    const request = createRequestMock(user);
    const response = createResponseMock();

    await mockRouteHandler(createUserRoute, request, response);

    expect(mockTable.length).toBe(1);
    expectStatus(400, expect, response);
  });

  it("should not be able to create a new user in the database table with wrong field types", async () => {
    const user: UserInfo = {
      name: "John Doe",
      email: "johndoe@email.com",
      password: 12345,
    } as any as UserInfo

    const request = createRequestMock(user);
    const response = createResponseMock();

    await mockRouteHandler(createUserRoute, request, response);

    expectStatus(400, expect, response);
    expect(UserRepo.create).toHaveBeenCalledTimes(0);
    expect(mockTable.length).toBe(0);
  });
});
