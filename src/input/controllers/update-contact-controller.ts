import UpdateContact from "../../application/use-cases/update-contact";
import { Contact, ContactProps } from "../../domain/entities/contact";
import { ResourceNotFound } from "../../domain/errors/error";
import IRepository from "../../output/repositories/IRepository";
import { HttpResponseEntity, notFound, ok, serverError } from "../contracts/http-response-entity";
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
            return ok(response);
        } catch (error) {
            if (error instanceof ResourceNotFound) {
                return notFound(error);
            }
            return serverError(error);
        }
    }
}