import { Contact, ContactProps } from "../../domain/entities/contact";
import IRepository from "../../output/repositories/IRepository";

export default class UpdateContact {

    constructor(private readonly repository: IRepository<Contact>) {
    }

    async execute(props: ContactProps, id: string) {
        return this.repository.update(props, id);
    }

}