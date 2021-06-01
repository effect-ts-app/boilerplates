import * as T from "@effect-ts/core/Effect"
import { Get, useClassNameForSchema } from "@effect-ts-app/core/Schema"
import { handle } from "@effect-ts-app/infra/app"

@useClassNameForSchema
export class AllSample extends Get("/")<AllSample>()() {}

export default handle({ Request: AllSample })((_) => T.unit)
