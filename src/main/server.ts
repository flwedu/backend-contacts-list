import router from "../infra/routes/express-router";
import createExpressServer from "../infra/server/create-express-server";

const app = createExpressServer(router);

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));