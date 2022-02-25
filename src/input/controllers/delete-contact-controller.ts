import DeleteContact from "../../application/use-cases/delete-contact";
import { Contact } from "../../domain/entities/contact";
import IRepository from "../../output/repositories/IRepository";
import { errorResponseEntity, HttpResponseEntity } from "../contracts/http-response-entity";
import { IController } from "./IController";

export default class DeleteContactController implements IController {

    constructor(private readonly repository: IRepository<Contact>) { }

    async handle(data: any): Promise<HttpResponseEntity<any>> {

        const { id } = data;
        try {
            await new DeleteContact(this.repository).execute(id);
            return {
                statusCode: 202,
                data: "Accepted"
            }
        }
        catch (error) {
            return errorResponseEntity(error);
        }
    }
} 