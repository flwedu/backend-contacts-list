import { Entity, Props } from "./Entity";

export type ContactQueryProps = {
    name?: string;
    email?: string;
    telephone?: string;
}

export interface ContactProps extends Props<Contact> {
    name: string;
    email: string;
    telephone: string;
    imageUrl: string;
}

export class Contact extends Entity {

    private constructor(props: ContactProps, id?: string) {
        super(props, id);
    }

    static of(props: ContactProps, id?: string): Contact {
        return new Contact(props, id);
    }

}