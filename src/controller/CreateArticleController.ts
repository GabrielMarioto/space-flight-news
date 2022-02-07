import { Request, Response } from "express";
import { CreateArticleService } from "../services/CreateArticleService";

export class CreateArticleController {
  async handle(request: Request, response: Response) {
    const {
      featured,
      title,
      url,
      imageUrl,
      newsSite,
      summary,
      publishedAt,
      launches_id,
      events_id,
    } = request.body;

    const service = new CreateArticleService();

    const result = await service.execute({
      featured,
      title,
      url,
      imageUrl,
      newsSite,
      summary,
      publishedAt,
      launches_id,
      events_id,
    });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}
