import cors from "cors";
import express, { Router } from "express";


export default function createExpressServer(router: Router) {
    const app = express();
    app.use(cors());
    app.use(express.json())
    app.use(router);

    return app;
}