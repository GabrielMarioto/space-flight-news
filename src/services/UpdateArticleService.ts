import { getRepository } from "typeorm";
import { Articles } from "../entities/Articles";
import { Events } from "../entities/Events";
import { Launches } from "../entities/Launches";

type ArticleUpdateRequest = {
  id: string;
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

export class UpdateArticleService {
  async execute({
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
  }: ArticleUpdateRequest) {
    const repo = getRepository(Articles);
    const eventsRepo = getRepository(Events);
    const launchesRepo = getRepository(Launches);

    if (
      !(await eventsRepo.findOne(events_id)) ||
      !(await launchesRepo.findOne(launches_id))
    ) {
      return new Error(`Event or Launche does not exist`);
    }

    const article = await repo.findOne(id);

    if (!article) {
      return new Error(`Article does not exist!`);
    }

    article.featured = featured ? featured : article.featured;
    article.title = title ? title : article.title;
    article.url = url ? url : article.url;
    article.imageUrl = imageUrl ? imageUrl : article.imageUrl;
    article.newsSite = newsSite ? newsSite : article.newsSite;
    article.summary = summary ? summary : article.summary;
    article.publishedAt = publishedAt ? publishedAt : article.publishedAt;
    article.launches_id = launches_id ? launches_id : article.launches_id;
    article.events_id = events_id ? events_id : article.events_id;

    await repo.save(article);

    return article;
  }
}
