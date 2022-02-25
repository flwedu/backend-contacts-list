import { ResourceNotFound } from "../../domain/errors/error";
import InMemoryContactRepository from "../../output/repositories/test/InMemory-ContactRepository";
import CreateContact from "./create-contact";
import DeleteContact from "./delete-contact";

describe("delete contact use case", () => {

    beforeEach(() => {
        jest.clearAllMocks();
    })

    it("should delete one element", async () => {

        expect.assertions(5);

        const repository = new InMemoryContactRepository();
        const createContact = new CreateContact(repository);
        const sut = new DeleteContact(repository);
        const spy = jest.spyOn(repository, "delete");

        const contact1 = await createContact.execute({
            name: "Contact1",
            email: "test@test.com",
            telephone: "(74)0000-0000",
            imageUrl: "",
        })
        const contact2 = await createContact.execute({
            name: "Contact2",
            email: "test@test.com",
            telephone: "(74)0000-0000",
            imageUrl: "",
        })

        expect(repository.list.length).toEqual(2);

        // Deleting the element
        await sut.execute(contact1.id)

        //Asserting again
        expect(repository.list.length).toEqual(1);
        expect(spy).toBeCalledTimes(1);

        //Deleting again
        await sut.execute(contact2.id)

        expect(repository.list.length).toEqual(0);
        expect(spy).toBeCalledTimes(2);
    })

    it("should get an error when trying to delete one element", async () => {

        expect.assertions(4);

        const repository = new InMemoryContactRepository();
        const createContact = new CreateContact(repository);
        const sut = new DeleteContact(repository);
        const spy = jest.spyOn(repository, "delete");

        const contact1 = await createContact.execute({
            name: "Contact1",
            email: "test@test.com",
            telephone: "(74)0000-0000",
            imageUrl: "",
        })
        const contact2 = await createContact.execute({
            name: "Contact2",
            email: "test@test.com",
            telephone: "(74)0000-0000",
            imageUrl: "",
        })

        expect(repository.list.length).toEqual(2);

        // Asserting the error
        sut.execute("1").catch((err) => {

            expect(spy).toBeCalledTimes(1);
            expect(repository.list.length).toEqual(2);
            expect(err).toBeInstanceOf(ResourceNotFound);
        })
    })

})