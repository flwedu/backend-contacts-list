import { PrismaClient } from "@prisma/client";
import { Contact, ContactProps } from "../../domain/entities/contact";
import { ResourceNotFound } from "../../domain/errors/error";
import IRepository from "./IRepository";

export default class PrismaContactRepository implements IRepository<Contact>{

    prisma = new PrismaClient();

    async findById(id: string): Promise<Contact> {
        return this.prisma.contact.findUnique({
            where: { id }
        })

    }
    async findAll(): Promise<Contact[]> {
        return await this.prisma.contact.findMany();

    }
    //@ts-ignore
    async save(props: ContactProps): Promise<Contact> {

        const contact = Contact.of(props);
        const createdContact = await this.prisma.contact.create({
            data: {
                ...contact
            },
        });
        return createdContact;
    }
    async delete(id: string): Promise<void> {

        try {
            await this.prisma.contact.delete({
                where: { id }
            })
        }
        catch (err) {
            throw new ResourceNotFound(`Contact ${id} not found`);
        }
    }
    async update(props: ContactProps, id: string): Promise<Contact> {

        return await this.prisma.contact.update({
            where: { id }, data: props
        })
    }

}