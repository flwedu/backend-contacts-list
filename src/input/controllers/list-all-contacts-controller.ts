import ListAllContacts from "../../application/use-cases/list-all-contacts";
import { Contact } from "../../domain/entities/contact";
import IRepository from "../../output/repositories/IRepository";
import { errorResponseEntity, HttpResponseEntity } from "../contracts/http-response-entity";
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
            return errorResponseEntity(error);
        }
    }
}