import * as T from "@effect-ts/core/Effect"
import {
  Get,
  Model,
  namedC,
  nonEmptyString,
  prop,
} from "@effect-ts-app/core/Schema"
import { handle } from "@effect-ts-app/infra/app"

import { UserSVC } from "@/services"

@namedC
export class AllLoggedInSample extends Get("/logged-in")<AllLoggedInSample>()() {}

export class Response extends Model<Response>()({
  userId: prop(nonEmptyString),
}) {}

export default handle({ Request: AllLoggedInSample, Response })((_) =>
  T.gen(function* ($) {
    const user = yield* $(UserSVC.UserProfile)

    return {
      userId: user.id,
    }
  })
)
