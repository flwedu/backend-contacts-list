import { Router } from "express"
import DeleteContactController from "../../input/controllers/delete-contact-controller";
import ListAllContactsController from "../../input/controllers/list-all-contacts-controller";
import SaveContactController from "../../input/controllers/save-contact-controller";
import UpdateContactController from "../../input/controllers/update-contact-controller";
import IRepository from "../../output/repositories/IRepository";

export default function createExpressRouter(repository: IRepository<any>) {

    const router = Router();

    router.get("/contacts", async (req, res) => {

        const responseEntity = await new ListAllContactsController(repository).handle();
        res.send(responseEntity.data).status(responseEntity.statusCode);
    })

    router.post("/contacts", async (req, res) => {
        const props = req.body;
        const responseEntity = await new SaveContactController(repository).handle({ props });
        res.send(responseEntity.data).status(responseEntity.statusCode);
    })

    router.put("/contacts/:id", async (req, res) => {
        const id = req.params.id;
        const props = req.body;
        const responseEntity = await new UpdateContactController(repository).handle({ id, props });

        res.send(responseEntity.data).status(responseEntity.statusCode);
    })

    router.delete("/contacts/:id", async (req, res) => {
        const id = req.params.id;
        const responseEntity = await new DeleteContactController(repository).handle({ id });

        res.send(responseEntity.data).status(responseEntity.statusCode);
    })

    return router;
}
