import IRepository from "../../application/repositories/IRepository";
import { Entity } from "../../domain/entities/Entity";

export interface IProvider<T extends Entity> {

    getRepository(): IRepository<T>
    // getDatabase(): IDatabase<T>;
}