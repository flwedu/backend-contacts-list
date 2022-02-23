import crypto from 'crypto';

export type Props = {};

export abstract class Entity {

    props: Props;
    id: string;

    protected constructor(props: Props, id?: string) {
        this.id = id ?? crypto.randomUUID();
        this.props = props;
    }
}