import { getRepository } from "typeorm";
import { Articles } from "../entities/Articles";
import { Events } from "../entities/Events";
import { Launches } from "../entities/Launches";

type ArticleRequest = {
  featured: boolean;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: Date;
  launches_id: string;
  events_id: string;
};

export class CreateArticleService {
  async execute({
    featured,
    title,
    url,
    imageUrl,
    newsSite,
    summary,
    publishedAt,
    launches_id,
    events_id,
  }: ArticleRequest): Promise<Articles | Error> {
    const repo = getRepository(Articles);
    const eventsRepo = getRepository(Events);
    const launchesRepo = getRepository(Launches);

    if (
      !(await eventsRepo.findOne(events_id)) ||
      !(await launchesRepo.findOne(launches_id))
    ) {
      return new Error(`Event or Launche does not exist`);
    }

    if (await repo.findOne({ title })) {
      return new Error(`Article already exists: ${title}`);
    }

    const article = repo.create({
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

    await repo.save(article);

    return article;
  }
}
