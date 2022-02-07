import { Request, Response } from "express";
import { GetAllEventsService } from "../services/GetAllEventsService";

export class GetAllEventsController {
  async handle(request: Request, response: Response) {
    const service = new GetAllEventsService();

    const events = await service.execute();

    return response.json(events);
  }
}
