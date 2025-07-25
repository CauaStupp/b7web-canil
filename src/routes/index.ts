import express from "express";
import * as pageController from "../controllers/pageController";
import * as searchController from "../controllers/searchController";

const routerMain = express.Router();

routerMain.get("/", pageController.home);
routerMain.get("/dogs", pageController.dogs);
routerMain.get("/cats", pageController.cats);
routerMain.get("/fishs", pageController.fishs);
routerMain.get("/search", searchController.search);

export { routerMain };
