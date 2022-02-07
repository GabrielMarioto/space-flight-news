import { Request, Response } from "express";
import { CreateLauncheService } from "../services/CreateLauncheService";

export class CreateLauncheController {
  async handle(request: Request, response: Response) {
    const { provider } = request.body;

    const service = new CreateLauncheService();

    const result = await service.execute({ provider });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}
