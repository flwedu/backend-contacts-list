import { HttpResponseEntity } from "../contracts/http-response-entity";

export interface IController {
    handle: (data: any) => Promise<HttpResponseEntity>;
}