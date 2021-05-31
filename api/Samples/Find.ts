import * as T from "@effect-ts/core/Effect"
import { Get, Model, namedC, nonEmptyString, prop } from "@effect-ts-app/core/Schema"
import { handle } from "@effect-ts-app/infra/app"

@namedC
export class FindSample extends Get("/:id")<FindSample>()({
  id: prop(nonEmptyString),
}) {}

export class Response extends Model<Response>()({
  id: prop(nonEmptyString),
}) {}

export default handle({ Request: FindSample, Response })((_) =>
  T.gen(function* ($) {
    return yield* $(
      T.succeed({
        id: _.id,
      })
    )
  })
)
