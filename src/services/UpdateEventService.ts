import { getRepository } from "typeorm";
import { Events } from "../entities/Events";

type EventUpdateRequest = {
  id: string;
  provider: string;
};

export class UpdateEventService {
  async execute({ id, provider }: EventUpdateRequest) {
    const repo = getRepository(Events);

    const event = await repo.findOne(id);

    if (!event) {
      return new Error(`Events does not exist!`);
    }

    event.provider = provider ? provider : event.provider;

    await repo.save(event);

    return event;
  }
}
