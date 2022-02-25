import { Router } from "express"
import DeleteContactController from "../../input/controllers/delete-contact-controller";
import ListAllContactsController from "../../input/controllers/list-all-contacts-controller";
import SaveContactController from "../../input/controllers/save-contact-controller";
import UpdateContactController from "../../input/controllers/update-contact-controller";
import IRepository from "../../output/repositories/IRepository";

export default function createExpressRouter(repository: IRepository<any>) {

    const router = Router();

    router.get("/api/contacts", async (req, res) => {

        const view = await new ListAllContactsController(repository).handle();
        res.send(view.data).status(view.statusCode);
    })

    router.post("/api/contacts", async (req, res) => {
        const data = await req.body;
        const view = await new SaveContactController(repository).handle(data);
        res.send(view.data).status(view.statusCode);
    })

    router.put("/api/contacts/:id", async (req, res) => {
        const id = req.params.id;
        const data = req.body;
        const view = await new UpdateContactController(repository).handle({ id, props: data });

        res.send(view.data).status(view.statusCode);
    })

    router.delete("/api/contacts/:id", async (req, res) => {
        const id = req.params.id;
        const responseEntity = await new DeleteContactController(repository).handle({ id });

        res.send(responseEntity.data).status(responseEntity.statusCode);
    })

    return router;
}
