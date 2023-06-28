import { Router } from "express";
import peopleController from "../controllers/people-controller";

const peopleRouter = Router();
peopleRouter.get("/person", peopleController.getPerson);

export default peopleRouter;