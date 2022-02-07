import { Router } from "express";
import { CreateEventController } from "./controller/CreateEventController";

const routes = Router();

routes.post("/events", new CreateEventController().handle);

export { routes };
