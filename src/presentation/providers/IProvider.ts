import IRepository from "../../application/repositories/IRepository";

export interface IProvider<T extends any> {

    getRepository(): IRepository<T>
    // getDatabase(): IDatabase<T>;
}