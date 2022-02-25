import CreateContact from "../../application/use-cases/create-contact";
import { ResourceNotFound } from "../../domain/errors/error";
import { repository } from "../../infra/config";
import { HttpResponseEntity, notFound, ok, serverError } from "../contracts/http-response-entity";
import IController from "../contracts/IController";

export default class SaveContactController implements IController {

    constructor() { }

    async handle(requestData: any): Promise<HttpResponseEntity<any>> {

        try {
            const data = await new CreateContact(repository).execute(requestData);
            return ok(data);
        } catch (error) {
            if (error instanceof ResourceNotFound) {
                return notFound(error);
            }
            return serverError(error);
        }
    }
}