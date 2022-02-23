import ListAllContacts from "../../application/use-cases/list-all-contacts";
import { Contact } from "../../domain/entities/contact";
import { ResourceNotFound } from "../../domain/errors/error";
import { IProvider } from "../providers/IProvider";
import { HttpResponseEntity, notFound, serverError } from "../contracts/http-response-entity";
import IController from "../contracts/IController";

export default class ListAllContactsController implements IController {

    constructor(private readonly provider: IProvider<Contact>) { }

    async handle(): Promise<HttpResponseEntity<any>> {
        try {
            const data = await new ListAllContacts(this.provider.getRepository()).execute();
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