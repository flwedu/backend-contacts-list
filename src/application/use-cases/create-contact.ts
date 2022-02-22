import { Contact, ContactProps } from "../../domain/entities/contact";
import IRepository from "../repositories/IRepository";

export default class CreateContact {
    constructor(private readonly repository: IRepository<Contact>) { }

    async execute(props: ContactProps, id?: string): Promise<Contact> {
        return this.repository.save(props, id);
    }
}