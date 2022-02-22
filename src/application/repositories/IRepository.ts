import { Props } from "../../domain/entities/Entity";

export default interface IRepository<T> {

    findById(id: string): Promise<T>;
    findAll(query?: any): Promise<T[]>;
    save(props: Props<T>, id?: string): Promise<T>;
    delete(id?: string): Promise<void>;
}