import { Router } from "express"
import ListAllContactsController from "../../input/controllers/list-all-contacts-controller";
import SaveContactController from "../../input/controllers/save-contact-controller";
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

    return router;
}
