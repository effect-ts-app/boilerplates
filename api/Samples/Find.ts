import * as T from "@effect-ts/core/Effect"
import {
  Get,
  Model,
  nonEmptyString,
  prop,
  useClassNameForSchema,
} from "@effect-ts-app/core/Schema"
import { handle } from "@effect-ts-app/infra/app"

@useClassNameForSchema
export class FindSample extends Get("/:id")<FindSample>()({
  id: prop(nonEmptyString),
}) {}

export class Response extends Model<Response>()({
  id: prop(nonEmptyString),
}) {}

export default handle({ Request: FindSample, Response })((_) =>
  T.succeed({
    id: _.id,
  })
)
