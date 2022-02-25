import { ResourceNotFound } from "../../domain/errors/error";
import InMemoryContactRepository from "../../output/repositories/test/InMemory-ContactRepository";
import CreateContact from "./create-contact";
import FindContact from "./find-contact";

describe("Find contact by id use case", () => {

    beforeEach(() => {
        jest.clearAllMocks();
    })

    it("Should return an contact", async () => {

        expect.assertions(3);

        const repository = new InMemoryContactRepository();
        const createContact = new CreateContact(repository);
        const sut = new FindContact(repository);
        const spy = jest.spyOn(repository, "findById");

        const contact = await createContact.execute({
            name: "Contact1",
            email: "test@test.com",
            telephone: "(74)0000-0000",
            imageUrl: "",
        })

        const find = await sut.execute(contact.id);

        expect(find.id).toEqual(contact.id);
        expect(contact).toEqual(contact);
        expect(spy).toBeCalledTimes(1);
    })

    it("Should not return an contact", async () => {

        expect.assertions(2);

        const repository = new InMemoryContactRepository();
        const sut = new FindContact(repository);
        const spy = jest.spyOn(repository, "findById");

        try {
            await sut.execute("1");
        }
        catch (err) {
            expect(err).toBeInstanceOf(ResourceNotFound);
            expect(spy).toBeCalledTimes(1);
        }
    })
})