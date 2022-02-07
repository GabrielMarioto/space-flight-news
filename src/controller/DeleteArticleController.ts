import { Request, Response } from "express";
import { DeleteArticleService } from "../services/DeleteArticleService";

export class DeleteArticleController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const service = new DeleteArticleService();

    const result = await service.execute(id);

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.status(200).end();
  }
}
