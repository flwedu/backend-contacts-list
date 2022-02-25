import { Contact, ContactProps } from "../../domain/entities/contact";
import IRepository from "../../output/repositories/IRepository";

export default class CreateContact {
    constructor(private readonly repository: IRepository<Contact>) { }

    async execute(props: ContactProps): Promise<Contact> {
        return this.repository.save(props);
    }
}