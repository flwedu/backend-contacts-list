import { HttpResponseEntity } from "./http-response-entity";

export default interface IController {

    handle(request: Request): Promise<HttpResponseEntity>;
}