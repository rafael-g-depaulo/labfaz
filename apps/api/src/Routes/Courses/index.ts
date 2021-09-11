import express from "express";
import { Connection } from "typeorm";

import { Router } from "Routes";

import UserRepository from "Repository/UserRepository";
import CourseRepository from "Repository/CourseRepository";
import RequestRepository from "Repository/RequestRepository";

import ensureAuthenticated from "Middlewares/ensureAuthenticated";

// import { CreateCourse } from "./CreateCourse";
import { GetAllCourses as GetAllCourses } from "./GetAllCourses";
import ShowCourse from "./ShowCourse";
import SubscribeToCourse from "./SubscribeToCourse";

type CoureDeps = {
  conn: Connection;
  CourseRepo?: CourseRepository;
  UserRepo?: UserRepository
  RequestRepo?: RequestRepository
};

const CourseRoute: Router<CoureDeps> = (deps, options) => {
  const {
    conn,
    CourseRepo = conn.getCustomRepository(CourseRepository),
    UserRepo = conn.getCustomRepository(UserRepository),
    RequestRepo = conn.getCustomRepository(RequestRepository),
  } = deps;

  return express
    .Router(options)
    // .post("/create", CreateCourse({ CourseRepo }))
    .post("/:course_id/subscribe", ensureAuthenticated, SubscribeToCourse({ CourseRepo, RequestRepo, UserRepo }))
    .get("/:course_id", ShowCourse({ CourseRepo }))
    .get("/", GetAllCourses({ CourseRepo }))
}

export default CourseRoute
