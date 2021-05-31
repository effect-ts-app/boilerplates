import * as T from "@effect-ts/core/Effect"
import { Get, namedC } from "@effect-ts-app/core/Schema"
import { handle } from "@effect-ts-app/infra/app"

@namedC
export class AllSample extends Get("/")<AllSample>()() {}

export default handle({ Request: AllSample })((_) => T.unit)
