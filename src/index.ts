import express from "express";
import { config } from "dotenv"
import cors from "cors"
import { router } from "./routes/routes";

const app = express();

const port = process.env.APP_PORT || 3003

app.use(express.json());
app.use(router);
app.use(config);
app.use(cors());

app.listen(port, () => console.log(`Server na URL http://localhost:${port}`));
