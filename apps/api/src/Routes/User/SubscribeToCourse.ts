import CourseRepository from "Repository/CourseRepository";
import Course from "Entities/Courses";
import User from "Entities/User";

import { RouteHandler } from "Utils/routeHandler";
import { ParsedUser } from "./ParseUser";
import { Req } from "Utils/request";

interface CreateSubscriptionRelation {
  CourseRepo: CourseRepository
}

export const subscribeToCourse: (
  deps: CreateSubscriptionRelation
) => RouteHandler<Req<{}, ParsedUser>> = ({
  CourseRepo,
}: CreateSubscriptionRelation) => async (req, res) => {
  console.log(req.params)

  return
}

export default subscribeToCourse
