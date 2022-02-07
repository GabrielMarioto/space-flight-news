import { getRepository } from "typeorm";
import { Articles } from "../entities/Articles";

export class DeleteArticleService {
  async execute(id: string) {
    const repo = getRepository(Articles);

    if (!(await repo.findOne(id))) {
      return new Error("Article does not exists!");
    }

    await repo.delete(id);
  }
}
