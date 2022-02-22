import { Entity } from "./Entity";

export type Props<Contact> = {
    name: string;
    email: string;
    telephone: string;
    imageUrl: string;
}

export class Contact extends Entity {

    private constructor(props: Props<Contact>, id?: string) {
        super(props, id);
    }

    static of(props: Props<Contact>, id?: string): Contact {
        return new Contact(props, id);
    }

}