import { Roles } from "@starter-project/permissions"
import { userSchema, SerializedUser } from "./serializedSchema"

describe("user entity", () => {

  it('should have email, role and id', async () => {
    const testData: SerializedUser = { id: 'n1g9O3Rxw5', email: 'test@mail.com', role: Roles.LOGGED_USER, profilePictureUrl: undefined }
    expect(await userSchema.isValid(testData)).toBe(true)
  })

})
