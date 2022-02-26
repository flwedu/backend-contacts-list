import FindContact from "../../application/use-cases/find-contact";
import { Contact } from "../../domain/entities/contact";
import IRepository from "../../output/repositories/IRepository";
import { errorResponseEntity, HttpResponseEntity } from "../contracts/http-response-entity";
import { IController } from "./IController";

export default class FindContactController implements IController {

    constructor(private readonly repository: IRepository<Contact>) { }

    async handle(data: any): Promise<HttpResponseEntity<any>> {

        const { id } = data;
        try {
            const response = await new FindContact(this.repository).execute(id);
            return {
                statusCode: 202,
                data: response
            }
        }
        catch (error) {
            return errorResponseEntity(error);
        }
    }
} 