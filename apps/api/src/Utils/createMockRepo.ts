import { DeepPartial, FindConditions, Repository } from "typeorm"

export interface RepoConfig<E> {
  resetTable: () => {},
  table: E[],
}

// type RepoMocks<E, R extends Repository<E>> = { [key in keyof R]: jest.SpyInstance<Required<R>[key], []> }

export interface RepoMocks<E> {
  create:   jest.SpyInstance<{}, []>,
  save:     jest.SpyInstance<{}, [e: E]>,
  remove:   jest.SpyInstance<{}, [e: E]>,
  find:     jest.SpyInstance<{}, []>,
  findOne:  jest.SpyInstance<{}, []>,
}

export interface Create  <E, R extends Repository<E>> { (repoConfig: RepoConfig<E>, repo: R): (partial: DeepPartial<E>) => E }
export interface Save    <E, R extends Repository<E>> { (repoConfig: RepoConfig<E>, repo: R): (entity: E) => void }
export interface Remove  <E, R extends Repository<E>> { (repoConfig: RepoConfig<E>, repo: R): (entity: E) => Promise<E> }
export interface Find    <E, R extends Repository<E>> { (repoConfig: RepoConfig<E>, repo: R): (cond: FindConditions<E>) => Promise<E[]> }
export interface FindOne <E, R extends Repository<E>> { (repoConfig: RepoConfig<E>, repo: R): (cond: FindConditions<E>) => Promise<E> }

export type MockRepo<Entity, Repo extends Repository<Entity>> = [ Repo, RepoConfig<Entity>, RepoMocks<Entity> ]

interface CrudOps<E, R extends Repository<E>> {
  create?:   Create<E, R>,
  save?:     Save<E, R>,
  remove?:   Remove<E, R>,
  find?:     Find<E, R>,
  findOne?:  FindOne<E, R>,
}

export const createRepoMock = <E, R extends Repository<E>>(Repo: () => R, crudOps: CrudOps<E, R> = {}) => () => {
  const OriginalRepo: R = Repo()

  let entityTable: E[] = []

  // use repository config
  const ReposotoryConfig: RepoConfig<E> = {
    resetTable: () => entityTable = [],
    get table(){ return entityTable },
    set table(newTable: E[]) { entityTable = newTable },
  } as RepoConfig<E>

  // spy CRUD methods
  const mockedRepo = OriginalRepo
  const mockObj: RepoMocks<E> = {
    create:   jest.spyOn(OriginalRepo as { create: () => {} }, 'create'),
    save:     jest.spyOn(OriginalRepo as { save: (e: E) => {} }, 'save'),
    remove:   jest.spyOn(OriginalRepo as { remove: (e: E) => {} }, 'remove'),
    find:     jest.spyOn(OriginalRepo as { find: () => {} }, 'find'),
    findOne:  jest.spyOn(OriginalRepo as { findOne: () => {} }, 'findOne'),
  }

  // mock CRUD methods, if mock implementation was given
  if (crudOps.create ) mockObj.create .mockImplementation(crudOps.create (ReposotoryConfig, OriginalRepo) as unknown as typeof OriginalRepo.create )
  if (crudOps.save   ) mockObj.save   .mockImplementation(crudOps.save   (ReposotoryConfig, OriginalRepo) as unknown as typeof OriginalRepo.save   )
  if (crudOps.remove ) mockObj.remove .mockImplementation(crudOps.remove (ReposotoryConfig, OriginalRepo) as unknown as typeof OriginalRepo.remove )
  if (crudOps.find   ) mockObj.find   .mockImplementation(crudOps.find   (ReposotoryConfig, OriginalRepo) as unknown as typeof OriginalRepo.find   )
  if (crudOps.findOne) mockObj.findOne.mockImplementation(crudOps.findOne(ReposotoryConfig, OriginalRepo) as unknown as typeof OriginalRepo.findOne)
  
  const returnVal: MockRepo<E, R> = [ mockedRepo, ReposotoryConfig, mockObj ]
  return returnVal
}

export default createRepoMock
