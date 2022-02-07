import { Router } from "express";
import { CreateEventController } from "./controller/CreateEventController";
import { CreateLauncheController } from "./controller/CreateLauncheController";
import { DeleteEventController } from "./controller/DeleteEventController";
import { DeleteLauncheController } from "./controller/DeleteLauncheController";
import { GetAllEventsController } from "./controller/GetAllEventsController";
import { GetAllLaunchesController } from "./controller/GetAllLaunchesController";
import { UpdateEventController } from "./controller/UpdateEventController";

const routes = Router();

routes.post("/events", new CreateEventController().handle);
routes.get("/events", new GetAllEventsController().handle);
routes.delete("/events/:id", new DeleteEventController().handle);
routes.put("/events/:id", new UpdateEventController().handle);

routes.post("/launches", new CreateLauncheController().handle);
routes.get("/launches", new GetAllLaunchesController().handle);
routes.delete("/launches/:id", new DeleteLauncheController().handle);

export { routes };
