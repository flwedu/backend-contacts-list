import { Contact } from "../../domain/entities/contact";
import IRepository from "../../output/repositories/IRepository";

export default class FindContact {

    constructor(private readonly repository: IRepository<Contact>) {
    }

    async execute(id: string) {
        return this.repository.findById(id);
    }

}