import { Request, Response } from "express";
import { UpdateEventService } from "../services/UpdateEventService";

export class UpdateEventController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { provider } = request.body;

    const service = new UpdateEventService();

    const result = await service.execute({ id, provider });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}
