import { Request, Response } from "express";
import { UpdateLauncheService } from "../services/UpdateLauncheService";

export class UpdateLauncheController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { provider } = request.body;

    const service = new UpdateLauncheService();

    const result = await service.execute({ id, provider });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}
