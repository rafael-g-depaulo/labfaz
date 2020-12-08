import { DeepPartial, FindConditions, Repository } from "typeorm";

export type Table<Entity> = Entity[]

export interface RepoConfig<T> {
  resetTable(): void,
  table: T[],
}

export interface MockRepo<Entity, Repo extends Repository<Entity>> {
  (): [ Repo, RepoConfig<Entity> ]
}

export interface Create<E>  { (repoConfig: RepoConfig<E>): (partial: DeepPartial<E>) => E }
export interface Save<E>    { (repoConfig: RepoConfig<E>): (entity: E) => void }
export interface Remove<E>  { (repoConfig: RepoConfig<E>): (entity: E) => Promise<E> }
export interface Find<E>    { (repoConfig: RepoConfig<E>): (cond: FindConditions<E>) => Promise<E[]> }
export interface FindOne<E> { (repoConfig: RepoConfig<E>): (cond: FindConditions<E>) => Promise<E> }

interface Deps<E> {
  create:   Create<E>,
  save:     Save<E>,
  remove:   Remove<E>,
  find:     Find<E>,
  findOne:  FindOne<E>,
}

// export const createMockRepo: <E, R extends Repository<E>>(deps: Deps) => MockRepo<E, R> = () => {
export const createMockRepo = <E, R extends Repository<E>>(deps: Deps<E>): MockRepo<E, R> => {
  return () => {
    let entityTable: E[] = []
  
    // use repository config
    const ReposotoryConfig: RepoConfig<E> = {
      resetTable: () => entityTable = [],
      get table(){ return entityTable },
      set table(newTable: E[]) { entityTable = newTable },
    } as RepoConfig<E>

    // use the given implementation of the mocked repo
    const MockedRepo: R = {
      create:   deps.create(ReposotoryConfig),
      save:     deps.save(ReposotoryConfig),
      remove:   deps.remove(ReposotoryConfig),
      find:     deps.find(ReposotoryConfig),
      findOne:  deps.findOne(ReposotoryConfig),
    } as R

    return [MockedRepo, ReposotoryConfig]
  }
}

export default createMockRepo
