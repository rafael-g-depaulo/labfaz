import express from "express";
import { Connection } from "typeorm";

import { Router } from "Routes";
import CourseRepository from "Repository/CourseRepository";
// import ensureAuthenticated from "Middlewares/ensureAuthenticated";

// import { CreateCourse } from "./CreateCourse";
import { GetAllCourses as GetAllCourses } from "./GetAllCourses";
import ShowCourse from "./ShowCourse";
import { CreateCourse } from "./CreateCourse";


type CoureDeps = {
  conn: Connection;
  CourseRepo?: CourseRepository;
};

const CourseRoute: Router<CoureDeps> = (deps, options) => {
  const { conn, CourseRepo = conn.getCustomRepository(CourseRepository) } = deps;

  return express
    .Router(options)
    // .post("/create", CreateCourse({ CourseRepo }))
    .get("/:course_id", ShowCourse({ CourseRepo }))
    .get("/", GetAllCourses({ CourseRepo }))
}

export default CourseRoute
