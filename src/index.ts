import express from "express";
import { config } from "dotenv"
import cors from "cors"
import { router } from "./routes/routes";

const port = process.env.PORT || 3001

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);
app.use(config);

app.listen(port, () => console.log(`Server na URL ${port}`));

export { app }
