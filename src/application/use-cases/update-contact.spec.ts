import InMemoryContactRepository from "../repositories/test/InMemory-ContactRepository";
import CreateContact from "./create-contact";
import UpdateContact from "./update-contact";

describe("update contacts use cases", () => {

    it("should update a contact with a new contact", async () => {

        expect.assertions(3);

        const repository = new InMemoryContactRepository();
        const createContact = new CreateContact(repository);
        const sut = new UpdateContact(repository);
        const spy = jest.spyOn(repository, "update");

        const contact = await createContact.execute({
            name: "Test",
            email: "test@test.com",
            telephone: "(74)0000-0000",
            imageUrl: "",
        })

        const updated = await sut.execute({
            name: "Contact",
            email: "test@test.com",
            telephone: "(74)0000-0000",
            imageUrl: "",
        }, contact.id)

        expect(updated.name).toEqual("Contact")
        expect(repository.list[0].name).toEqual("Contact");
        expect(spy).toBeCalledTimes(1);
    })
})