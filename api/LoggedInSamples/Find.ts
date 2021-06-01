import * as T from "@effect-ts/core/Effect"
import {
  Get,
  Model,
  nonEmptyString,
  prop,
  useClassNameForSchema,
} from "@effect-ts-app/core/Schema"
import { handle } from "@effect-ts-app/infra/app"

import { UserSVC } from "@/services"

@useClassNameForSchema
export class FindLoggedInSample extends Get("/logged-in/:id")<FindLoggedInSample>()({
  id: prop(nonEmptyString),
}) {}

export class Response extends Model<Response>()({
  id: prop(nonEmptyString),
  userId: prop(nonEmptyString),
}) {}

export default handle({ Request: FindLoggedInSample, Response })((_) =>
  T.gen(function* ($) {
    const user = yield* $(UserSVC.UserProfile)

    return {
      id: _.id,
      userId: user.id,
    }
  })
)
