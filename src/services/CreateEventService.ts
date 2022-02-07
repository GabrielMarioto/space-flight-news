import { getRepository } from "typeorm";
import { Events } from "../entities/Events";

type EventRequest = {
  provider: string;
};

export class CreateEventService {
  async execute({ provider }: EventRequest): Promise<Events | Error> {
    const repo = getRepository(Events);

    if (await repo.findOne({ provider })) {
      return new Error(`Event already exists: ${provider}`);
    }

    const event = repo.create({ provider });

    await repo.save(event);

    return event;
  }
}
