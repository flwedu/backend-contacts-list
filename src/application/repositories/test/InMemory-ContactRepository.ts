import IRepository from "../IRepository";
import { Contact, ContactProps, ContactQueryProps, } from "../../../domain/entities/contact"
import { ResourceNotFound } from "../../../domain/errors/error";

export default class InMemoryContactRepository implements IRepository<Contact> {

    list: Contact[] = [];

    findById(id: string): Promise<Contact> {
        const result = this.list.filter(contact => contact.id === id);
        if (!result.length) {
            throw new ResourceNotFound(`Contact ${id} not found`);
        }
        return Promise.resolve(result[0]);
    }
    findAll(): Promise<Contact[]> {

        return Promise.resolve(this.list);
    }
    save(props: ContactProps, id?: string): Promise<Contact> {

        const contact = Contact.of(props, id);
        this.list.push(contact);
        return Promise.resolve(contact)
    }
    delete(id?: string): Promise<void> {
        const previousLength = this.list.length
        this.list = this.list.filter(contact => contact.id !== id);
        if (previousLength > this.list.length) {
            return Promise.resolve();
        }
        throw new ResourceNotFound(`Contact ${id} not found`);
    }
    update(props: ContactProps, id: string): Promise<Contact> {
        const contactIndex = this.list.findIndex(element => element.id === id)
        if (contactIndex === -1) {
            throw new ResourceNotFound(`Contact ${id} not found`);
        }
        const contact = Contact.of(props, id);
        this.list[contactIndex] = contact;

        return Promise.resolve(contact)
    }

}