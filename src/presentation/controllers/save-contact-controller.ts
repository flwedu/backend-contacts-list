import CreateContact from "../../application/use-cases/create-contact";
import { Contact } from "../../domain/entities/contact";
import { ResourceNotFound } from "../../domain/errors/error";
import { HttpResponseEntity, notFound, ok, serverError } from "../contracts/http-response-entity";
import IController from "../contracts/IController";
import { IProvider } from "../providers/IProvider";

export default class SaveContactController implements IController {

    constructor(private readonly provider: IProvider<Contact>) { }

    async handle(requestData: any): Promise<HttpResponseEntity<any>> {

        try {
            const data = await new CreateContact(this.provider.getRepository()).execute(requestData);
            return ok(data);
        } catch (error) {
            if (error instanceof ResourceNotFound) {
                return notFound(error);
            }
            return serverError(error);
        }
    }
}