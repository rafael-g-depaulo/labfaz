import { AnyObjectSchema } from "yup"

// default implementation of constructor and serialization included. they will work for most cases, but you can always override them when needed/useful
export abstract class Entity<Schema extends AnyObjectSchema, SerializedEntity extends Schema["__outputType"]> {
  constructor(serializedData: SerializedEntity) {
    for (const property of Object.keys(serializedData)) {
      this[property as keyof this] = <any>serializedData[property as keyof SerializedEntity]
    }
  }

  serialize(): SerializedEntity {
    return JSON.stringify(this) as SerializedEntity
  }
}
