// import { getApiUrl } from "@labfaz/server-conn-info"

import CourseRepository from "Repository/CourseRepository"

import { createdSuccessfully } from "Utils/endpointReturns"
import { RouteHandler } from "Utils/routeHandler"
import { Req } from "Utils/request"

// import Course from "Entities/Courses"

interface CreateCourseDeps {
  CourseRepo: CourseRepository
}

export const CreateCourse: (
  deps: CreateCourseDeps
) => RouteHandler<Req> = ({
  CourseRepo,
}: CreateCourseDeps) => async (_req, res) => {

  const course1 = await CourseRepo.createCourse({
    teacher: ["Rafael Gonçalves"],
    type: "curso",
    tags: ["varios papos"],
    detail: ["vai aprender a gerenciar as paradas"],
    fonte: ["Da minha cabeça"],
    short_description: "varias palavras aqui",
    about: "kasjdhkjashda",
    requirements: "Estar presente onlaine",
    available: false,
    banner: "www.google.com.br",
    has_subscription: true,
    subscription_start_date: new Date(),
    subscription_finish_date: new Date(),
    activity_date: new Date(),
    link: "zooooooooooooooooom.com.br"
  })

  const course2 = await CourseRepo.createCourse({
    teacher: ["Rafael Gonçalves"],
    type: "curso",
    tags: ["varios papos"],
    detail: ["vai aprender a gerenciar as paradas"],
    fonte: ["Da minha cabeça"],
    short_description: "varias palavras aqui",
    about: "kasjdhkjashda",
    requirements: "Estar presente onlaine",
    available: false,
    banner: "www.google.com.br",
    has_subscription: false,
    subscription_start_date: new Date(),
    subscription_finish_date: new Date(),
    activity_date: new Date(),
    link: "zooooooooooooooooom.com.br"
  })


  return createdSuccessfully(res, {
    course1,
    course2
  })

}

export default CreateCourse
