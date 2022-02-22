import crypto from 'crypto';

export type Props<Entity> = {};

export abstract class Entity {

    props: Props<Entity>;
    id: string;

    protected constructor(props: Props<Entity>, id?: string) {
        this.id = id ?? crypto.randomUUID();
        this.props = props;
    }
}