import { Request, Response } from "express";
import { UpdateArticleService } from "../services/UpdateArticleService";

export class UpdateArticleController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
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

    const service = new UpdateArticleService();

    const result = await service.execute({
      id,
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
