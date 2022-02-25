import App from "./config";

const PORT = process.env.PORT || 4000;

const app = App();
app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));