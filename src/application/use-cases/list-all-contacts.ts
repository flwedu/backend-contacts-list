import { Contact, ContactQueryProps } from "../../domain/entities/contact";
import IRepository from "../repositories/IRepository";

export default class ListAllContacts {

    constructor(private readonly repository: IRepository<Contact>) {
    }

    async execute() {
        return await this.repository.findAll();
    }

}