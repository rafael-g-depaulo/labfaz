import express from "express"
import { Connection } from "typeorm"

import { Router } from "Routes"
import AnimalExampleRepository from "Repository/AnimalExampleRepository"

import CreateAnimal from "./CreateAnimal"
import ListAllAnimals from "./ListAllAnimals"
import ShowAnimal from "./ShowAnimal"
import DeleteAnimal from "./DeleteAnimal"
import GetAnimalFromParams from "./GetAnimalFromParams"

type AnimalExampleDeps = {
  conn: Connection,
  AnimalExampleRepo?: AnimalExampleRepository,
}

const AnimalExampleRouter: Router<AnimalExampleDeps> = (deps, options) => {
  const {
    conn,
    AnimalExampleRepo = conn.getCustomRepository(AnimalExampleRepository),
  } = deps

  return express.Router(options)
    .post("/create", CreateAnimal({ AnimalExampleRepo }))
    .get("/", ListAllAnimals({ AnimalExampleRepo }))
    .get("/:id", GetAnimalFromParams({ AnimalExampleRepo }), ShowAnimal)
    .delete("/:id", GetAnimalFromParams({ AnimalExampleRepo }), DeleteAnimal({ AnimalExampleRepo }))
}

export default AnimalExampleRouter
