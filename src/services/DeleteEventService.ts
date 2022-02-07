import { getRepository } from "typeorm";
import { Events } from "../entities/Events";

export class DeleteEventService {
  async execute(id: string) {
    const repo = getRepository(Events);

    if (!(await repo.findOne(id))) {
      return new Error("Event does not exists!");
    }

    await repo.delete(id);
  }
}
