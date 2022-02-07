import { getRepository } from "typeorm";
import { Articles } from "../entities/Articles";

export class GetAllArticlesService {
  async execute() {
    const repo = getRepository(Articles);

    const articles = await repo.find({
      relations: ["launches", "events"],
    });

    return articles;
  }
}
