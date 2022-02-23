import crypto from "crypto"

export interface ContactProps {
    id?: string;
    name: string;
    email: string;
    telephone: string;
    imageUrl: string;
}

export class Contact {

    id: string;
    name: string;
    email: string;
    telephone: string;
    imageUrl: string;

    private constructor(props: ContactProps) {
        Object.assign(this, props);
        this.id = props.id ?? crypto.randomUUID();
    }

    static of(props: ContactProps): Contact {
        return new Contact(props);
    }

}