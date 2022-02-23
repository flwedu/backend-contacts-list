export default interface IRepository<T extends any> {

    findById(id: string): Promise<T>;
    findAll(): Promise<T[]>;
    save(props: any): Promise<T>;
    delete(id: string): Promise<void>;
    update(props: any, id: string): Promise<T>;
}