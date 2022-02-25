import InMemoryContactRepository from "../../output/repositories/test/InMemory-ContactRepository";
import CreateContact from "./create-contact";
import ListAllContacts from "./list-all-contacts";

describe("list all contacts use case", () => {

    beforeEach(() => {
        jest.clearAllMocks();
    })

    it("Should return a empty list", async () => {

        expect.assertions(2);

        const repository = new InMemoryContactRepository();
        const sut = new ListAllContacts(repository);
        const spy = jest.spyOn(repository, "findAll");

        await sut.execute()

        expect(repository.list.length).toEqual(0);
        expect(spy).toBeCalledTimes(1);
    })

    it("Should return a list with two elements", async () => {

        expect.assertions(2);

        const repository = new InMemoryContactRepository();
        const createContact = new CreateContact(repository);
        await createContact.execute({
            name: "Contact1",
            email: "test@test.com",
            telephone: "(74)0000-0000",
            imageUrl: "",
        })
        await createContact.execute({
            name: "Contact2",
            email: "test@test.com",
            telephone: "(74)0000-0000",
            imageUrl: "",
        })
        const sut = new ListAllContacts(repository);
        const spy = jest.spyOn(repository, "findAll");

        const result = await sut.execute()

        expect(result.length).toEqual(2);
        expect(spy).toBeCalledTimes(1);
    })

})