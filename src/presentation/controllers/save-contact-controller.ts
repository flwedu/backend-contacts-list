import CreateContact from "../../application/use-cases/create-contact";
import { Contact, ContactProps } from "../../domain/entities/contact";
import { ResourceNotFound } from "../../domain/errors/error";
import { IProvider } from "../providers/IProvider";
import { HttpResponseEntity, notFound, serverError } from "../contracts/http-response-entity";
import IController from "../contracts/IController";

export default class SaveContactController implements IController {

    constructor(private readonly provider: IProvider<Contact>) { }

    async handle(request: Request): Promise<HttpResponseEntity<any>> {

        try {
            const props = await request.json() as ContactProps;
            const data = await new CreateContact(this.provider.getRepository()).execute(props);
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