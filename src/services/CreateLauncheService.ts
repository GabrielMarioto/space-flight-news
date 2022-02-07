import { getRepository } from "typeorm";
import { Launches } from "../entities/Launches";

type LaunchesRequest = {
  provider: string;
};

export class CreateLauncheService {
  async execute({ provider }: LaunchesRequest): Promise<Launches | Error> {
    const repo = getRepository(Launches);

    if (await repo.findOne({ provider })) {
      return new Error(`Launches already exists: ${provider}`);
    }

    const launches = repo.create({ provider });

    await repo.save(launches);

    return launches;
  }
}
