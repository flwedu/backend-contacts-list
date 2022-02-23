import { Contact } from "../../domain/entities/contact"

export type ContactFields = {

    id?: string,
    name: string,
    email?: string,
    telephone?: string,
    imageUrl?: string,
}

export default class ContactAdapter {

    static toEntity({ id, name, email, telephone, imageUrl }: ContactFields) {
        return Contact.of({
            name,
            email,
            telephone,
            imageUrl
        }, id)
    }

    static toText(contact: Contact): ContactFields {
        const { name, email, telephone, imageUrl } = contact.props as ContactFields;
        return { id: contact.id, name, email, telephone, imageUrl };
    }
}