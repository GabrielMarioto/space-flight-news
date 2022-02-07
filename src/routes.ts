import { Router } from "express";
import { CreateArticleController } from "./controller/CreateArticleController";
import { CreateEventController } from "./controller/CreateEventController";
import { CreateLauncheController } from "./controller/CreateLauncheController";
import { DeleteEventController } from "./controller/DeleteEventController";
import { DeleteLauncheController } from "./controller/DeleteLauncheController";
import { GetAllArticlesController } from "./controller/GetAllArticlesController";
import { GetAllEventsController } from "./controller/GetAllEventsController";
import { GetAllLaunchesController } from "./controller/GetAllLaunchesController";
import { UpdateEventController } from "./controller/UpdateEventController";
import { UpdateLauncheController } from "./controller/UpdateLauncheController";

const routes = Router();

routes.post("/events", new CreateEventController().handle);
routes.get("/events", new GetAllEventsController().handle);
routes.delete("/events/:id", new DeleteEventController().handle);
routes.put("/events/:id", new UpdateEventController().handle);

routes.post("/launches", new CreateLauncheController().handle);
routes.get("/launches", new GetAllLaunchesController().handle);
routes.delete("/launches/:id", new DeleteLauncheController().handle);
routes.put("/launches/:id", new UpdateLauncheController().handle);

routes.get("/", (req, res) => {
  res
    .status(200)
    .json({ msg: "Back-end Challenge 2021 🏅 - Space Flight News" });
});

routes.post("/articles/:", new CreateArticleController().handle);
routes.get("/articles/:", new GetAllArticlesController().handle);
export { routes };
