import { Request, Response } from "express";
import { DeleteEventService } from "../services/DeleteEventService";

export class DeleteEventController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const service = new DeleteEventService();

    const result = await service.execute(id);

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.status(200).end();
  }
}
