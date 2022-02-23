import { Entity, Props } from "../../domain/entities/Entity";

export default interface IRepository<T extends Entity> {

    findById(id: string): Promise<T>;
    findAll(): Promise<T[]>;
    save(props: Props, id?: string): Promise<T>;
    delete(id?: string): Promise<void>;
    update(props: Props, id: string): Promise<T>;
}