import CreateContact from "../../application/use-cases/create-contact";
import { Contact, ContactProps } from "../../domain/entities/contact";
import IRepository from "../../output/repositories/IRepository";
import { errorResponseEntity, HttpResponseEntity, okResponseEntity } from "../contracts/http-response-entity";
import { IController } from "./IController";

export default class SaveContactController implements IController {

    constructor(private readonly repository: IRepository<Contact>) { }

    async handle(data: { props: ContactProps }): Promise<HttpResponseEntity> {

        try {
            const response = await new CreateContact(this.repository).execute(data.props);
            return okResponseEntity(response);
        } catch (error) {
            return errorResponseEntity(error);
        }
    }
}

