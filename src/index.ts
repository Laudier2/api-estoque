import express from "express";
import { config } from "dotenv"
import cors from "cors"
import { router } from "./routes/routes";

const app = express();

const port = process.env.APP_PORT || 3000

app.use(express.json());
app.use(cors());
app.use(router);
app.use(config);

app.listen(port, () => console.log(`Server na URL http://localhost:${port}`));
