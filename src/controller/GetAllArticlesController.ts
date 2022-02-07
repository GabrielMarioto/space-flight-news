import { Request, Response } from "express";
import { GetAllArticlesService } from "../services/GetAllArticlesService";

export class GetAllArticlesController {
  async handle(request: Request, response: Response) {
    const service = new GetAllArticlesService();

    const articles = await service.execute();

    return response.json(articles);
  }
}
