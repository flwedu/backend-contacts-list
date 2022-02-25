import ListAllContacts from "../../application/use-cases/list-all-contacts";
import { ResourceNotFound } from "../../domain/errors/error";
import { repository } from "../../infra/config";
import { HttpResponseEntity, notFound, serverError } from "../contracts/http-response-entity";
import IController from "../contracts/IController";

export default class ListAllContactsController implements IController {

    constructor() { }

    async handle(): Promise<HttpResponseEntity<any>> {
        try {
            const data = await new ListAllContacts(repository).execute();
            return {
                statusCode: 200,
                data
            }
        } catch (error) {
            if (error instanceof ResourceNotFound) {
                return notFound(error);
            }
            return serverError(error);
        }
    }
}