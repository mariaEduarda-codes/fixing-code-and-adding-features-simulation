import express from "express";
import taskRoutes from "./taskRoutes.js";


const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status.send("Fixing code and adding features simulation");
    });

    app.use(express.json(), taskRoutes);
};

export default routes;