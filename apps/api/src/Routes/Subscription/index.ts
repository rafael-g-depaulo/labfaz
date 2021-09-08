import express from "express"
import { Connection } from "typeorm"
import { Router } from "Routes"

import UserRepository from "Repository/UserRepository"
import RequestRepository from "Repository/RequestRepository"

import ensureAuthenticated from "Middlewares/ensureAuthenticated"
import CourseRepository from "Repository/CourseRepository"

import SubscribeToCourse from "./createSubscripiton"

interface SubscriptionDeps {
  conn: Connection,
}

const RequestRouter: Router<SubscriptionDeps> = (deps, options) => {
  const { conn } = deps

  const UserRepo = conn.getCustomRepository(UserRepository)
  const RequestRepo = conn.getCustomRepository(RequestRepository)
  const CourseRepo = conn.getCustomRepository(CourseRepository)

  return express
    .Router(options)
    .post("/:courseId/subscribe", ensureAuthenticated, SubscribeToCourse({ UserRepo, RequestRepo, CourseRepo }))
}

export default RequestRouter
