import { Contact } from "../../domain/entities/contact";
import IRepository from "../../output/repositories/IRepository";

export default class ListAllContacts {

    constructor(private readonly repository: IRepository<Contact>) {
    }

    async execute() {
        return this.repository.findAll();
    }

}