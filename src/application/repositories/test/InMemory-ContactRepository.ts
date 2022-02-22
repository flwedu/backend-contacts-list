import IRepository from "../IRepository";
import { Contact, ContactProps, ContactQueryProps, } from "../../../domain/entities/contact"

export default class InMemoryContactRepository implements IRepository<Contact> {

    list: Contact[] = [];

    findById(id: string): Promise<Contact> {
        const result = this.list.filter(contact => contact.id === id);
        if (!result.length) {
            return Promise.reject("Contact not found")
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
        this.list = this.list.filter(contact => contact.id !== id);
        return Promise.resolve();
    }

}