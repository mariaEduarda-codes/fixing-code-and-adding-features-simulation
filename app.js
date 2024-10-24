import dbConnect from "./config/dbConnect.js";
import express from "express";
import routes from "./routes/index.js";

const conexao = await dbConnect();

conexao.on('error', (err) => {
    console.error("Connection error: ", err);
});

conexao.once("open", () => {
    console.log("Connection opened");
});

const app = express();

routes(app);

export default app;