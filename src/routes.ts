import { Router } from "express";
import { CreateEventController } from "./controller/CreateEventController";
import { DeleteEventController } from "./controller/DeleteEventController";
import { GetAllEventsController } from "./controller/GetAllEventsController";

const routes = Router();

routes.post("/events", new CreateEventController().handle);
routes.get("/events", new GetAllEventsController().handle);
routes.delete("/events/:id", new DeleteEventController().handle);

export { routes };
