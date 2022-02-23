import IRepository from "../../application/repositories/IRepository";
import PrismaContactRepository from "../../application/repositories/PrismaContactRepository";
import { Contact } from "../../domain/entities/contact";
import { IProvider } from "./IProvider";

export class ExpressPrismaContactProvider implements IProvider<Contact>{

    private repository = new PrismaContactRepository();

    getRepository(): IRepository<Contact> {
        return this.repository;
    }

}