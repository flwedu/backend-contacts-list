import UpdateContact from "../../application/use-cases/update-contact";
import { Contact, ContactProps } from "../../domain/entities/contact";
import IRepository from "../../output/repositories/IRepository";
import { errorResponseEntity, HttpResponseEntity, okResponseEntity } from "../contracts/http-response-entity";
import { IController } from "./IController";

type UpdateData = {
    id: string,
    props: ContactProps
}

export default class UpdateContactController implements IController {

    constructor(private readonly repository: IRepository<Contact>) { }

    async handle(data: UpdateData): Promise<HttpResponseEntity> {

        try {
            const response = await new UpdateContact(this.repository).execute(data.props, data.id);
            return okResponseEntity(response);
        } catch (error) {
            return errorResponseEntity(error);
        }
    }
}