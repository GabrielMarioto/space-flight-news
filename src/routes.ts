import { Router } from "express";
import { CreateEventController } from "./controller/CreateEventController";
import { CreateLauncheController } from "./controller/CreateLauncheController";
import { DeleteEventController } from "./controller/DeleteEventController";
import { GetAllEventsController } from "./controller/GetAllEventsController";
import { UpdateEventController } from "./controller/UpdateEventController";

const routes = Router();

routes.post("/events", new CreateEventController().handle);
routes.get("/events", new GetAllEventsController().handle);
routes.delete("/events/:id", new DeleteEventController().handle);
routes.put("/events/:id", new UpdateEventController().handle);

routes.post("/launches", new CreateLauncheController().handle);
export { routes };
