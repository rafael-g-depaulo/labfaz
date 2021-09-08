import express from "express";
import { Connection } from "typeorm";

import { Router } from "Routes";
import CourseRepository from "Repository/CourseRepository";
// import ensureAuthenticated from "Middlewares/ensureAuthenticated";

// import { CreateCourse } from "./CreateCourse";
import { GetAllCourers } from "./GetAllCoursers";


type CoureDeps = {
  conn: Connection;
  CourseRepo?: CourseRepository;
};

const CourseRoute: Router<CoureDeps> = (deps, options) => {
  const { conn, CourseRepo = conn.getCustomRepository(CourseRepository) } = deps;

  return express
    .Router(options)
    // .post("/create", CreateCourse({ CourseRepo }))
    .get("/", GetAllCourers({ CourseRepo }))
}

export default CourseRoute
