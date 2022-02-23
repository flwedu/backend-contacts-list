import { Router } from "express"
import ListAllContactsController from "../presentation/controllers/list-all-contacts-controller";
import SaveContactController from "../presentation/controllers/save-contact-controller";
import { ExpressPrismaContactProvider } from "../presentation/providers/ExpressPrismaContactProvider";

const router = Router();
const provider = new ExpressPrismaContactProvider();

router.get("/api/contacts", async (req, res) => {

    const view = await new ListAllContactsController(provider).handle();
    res.send(view.data).status(view.statusCode);
})

router.post("/api/contacts", async (req, res) => {
    const data = await req.body;
    const view = await new SaveContactController(provider).handle(data);
    res.send(view.data).status(view.statusCode);
})

export default router;