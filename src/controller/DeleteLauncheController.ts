import { Request, Response } from "express";
import { DeleteLauncheService } from "../services/DeleteLauncheService";

export class DeleteLauncheController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const service = new DeleteLauncheService();

    const result = await service.execute(id);

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.status(200).end();
  }
}
