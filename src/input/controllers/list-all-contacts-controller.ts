import { Contact } from "@prisma/client";
import ListAllContacts from "../../application/use-cases/list-all-contacts";
import { ResourceNotFound } from "../../domain/errors/error";
import IRepository from "../../output/repositories/IRepository";
import { HttpResponseEntity, notFound, serverError } from "../contracts/http-response-entity";
import { IController } from "./IController";

export default class ListAllContactsController implements IController {

    constructor(private readonly repository: IRepository<Contact>) { }

    async handle(): Promise<HttpResponseEntity<any>> {
        try {
            const data = await new ListAllContacts(this.repository).execute();
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