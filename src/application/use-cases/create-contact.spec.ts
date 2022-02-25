import InMemoryContactRepository from "../../output/repositories/test/InMemory-ContactRepository";
import CreateContact from "./create-contact";

describe("Create contact use case", () => {

    beforeEach(() => {
        jest.clearAllMocks();
    })

    it("Should create a new contact", async () => {

        expect.assertions(3);

        const repository = new InMemoryContactRepository();
        const sut = new CreateContact(repository);
        const spy = jest.spyOn(repository, "save");

        const contact = await sut.execute({
            name: "Test",
            email: "test@test.com",
            telephone: "(74)0000-0000",
            imageUrl: "",
        })

        expect(repository.list.length).toEqual(1);
        expect(contact).toEqual(repository.list[0]);
        expect(spy).toBeCalledTimes(1);
    })
})