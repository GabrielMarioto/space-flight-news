import { Request, Response } from "express";
import { CreateEventService } from "../services/CreateEventService";

export class CreateEventController {
  async handle(request: Request, response: Response) {
    const { provider } = request.body;

    const service = new CreateEventService();

    const result = await service.execute({ provider });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}
