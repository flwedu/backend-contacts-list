import cors from "cors";
import express from "express";
import createExpressRouter from "../infra/routes/express-router";
import PrismaContactRepository from "../output/repositories/PrismaContactRepository";

export default function App() {

    const repository = new PrismaContactRepository();
    const router = createExpressRouter(repository);
    const server = express();

    server.use(cors());
    server.use(express.json())
    server.use("/api", router);

    return server;
}
