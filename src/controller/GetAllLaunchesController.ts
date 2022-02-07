import { Request, Response } from "express";
import { GetAllLaunchesService } from "../services/GetAllLaunchesService";

export class GetAllLaunchesController {
  async handle(request: Request, response: Response) {
    const service = new GetAllLaunchesService();

    const launches = await service.execute();

    return response.json(launches);
  }
}
