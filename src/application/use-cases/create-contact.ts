import { Contact, Props } from "../../domain/entities/contact";
import IRepository from "../repositories/IRepository";

export default class CreateContact {
    constructor(private readonly repository: IRepository<Contact>) { }

    async execute(props: Props<Contact>, id?: string): Promise<Contact> {
        const result = await this.repository.save(props, id);
        return result;
    }
}