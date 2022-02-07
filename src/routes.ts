import { Router } from "express";
import { CreateEventController } from "./controller/CreateEventController";
import { GetAllEventsController } from "./controller/GetAllEventsController";

const routes = Router();

routes.post("/events", new CreateEventController().handle);
routes.get("/events", new GetAllEventsController().handle);

export { routes };
