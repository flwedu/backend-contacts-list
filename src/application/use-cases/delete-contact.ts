import { Contact } from "../../domain/entities/contact";
import IRepository from "../../output/repositories/IRepository";

export default class DeleteContact {
    constructor(private readonly repository: IRepository<Contact>) { }

    async execute(id: string): Promise<void> {
        return this.repository.delete(id);
    }
}