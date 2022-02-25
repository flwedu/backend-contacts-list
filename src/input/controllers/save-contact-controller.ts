import CreateContact from "../../application/use-cases/create-contact";
import { Contact } from "../../domain/entities/contact";
import { ResourceNotFound } from "../../domain/errors/error";
import IRepository from "../../output/repositories/IRepository";
import { HttpResponseEntity, notFound, ok, serverError } from "../contracts/http-response-entity";
import { IController } from "./IController";

export default class SaveContactController implements IController {

    constructor(private readonly repository: IRepository<Contact>) { }

    async handle(data: any): Promise<HttpResponseEntity> {

        try {
            const response = await new CreateContact(this.repository).execute(data);
            return ok(response);
        } catch (error) {
            if (error instanceof ResourceNotFound) {
                return notFound(error);
            }
            return serverError(error);
        }
    }
}