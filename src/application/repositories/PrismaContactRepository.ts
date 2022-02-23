import { PrismaClient } from "@prisma/client";
import { Contact, ContactProps } from "../../domain/entities/contact";
import { ResourceNotFound } from "../../domain/errors/error";
import ContactAdapter from "../adapters/contact-adapter";
import IRepository from "./IRepository";

export default class PrismaContactRepository implements IRepository<Contact>{

    private prisma = new PrismaClient();

    async findById(id: string): Promise<Contact> {
        const contact = await this.prisma.contact.findUnique({
            where: { id }
        })
        if (!contact) {
            throw new ResourceNotFound(`Contact ${id} not found`);
        }
        return ContactAdapter.toEntity({ ...contact });

    }
    async findAll(): Promise<Contact[]> {
        const list = await this.prisma.contact.findMany();
        return list.map(ContactAdapter.toEntity);
    }
    async save(props: ContactProps, id?: string): Promise<Contact> {

        const contact = await this.prisma.contact.create({
            data: {
                id,
                ...props,
            }
        });
        if (!contact) {
            throw new ResourceNotFound(`Contact ${id} not found`);
        }
        else return ContactAdapter.toEntity({ ...contact });
    }
    async delete(id?: string): Promise<void> {

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

        const contact = await this.prisma.contact.update({
            where: { id }, data: props
        })
        return ContactAdapter.toEntity({ ...contact });
    }

}