import { getRepository } from "typeorm";
import { Events } from "../entities/Events";

export class GetAllEventsService {
  async execute() {
    const repo = getRepository(Events);

    const events = await repo.find();

    return events;
  }
}
