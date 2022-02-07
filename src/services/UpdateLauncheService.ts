import { getRepository } from "typeorm";
import { Launches } from "../entities/Launches";

type LauncheUpdateRequest = {
  id: string;
  provider: string;
};

export class UpdateLauncheService {
  async execute({ id, provider }: LauncheUpdateRequest) {
    const repo = getRepository(Launches);

    const launches = await repo.findOne(id);

    if (!launches) {
      return new Error(`launches does not exist!`);
    }

    launches.provider = provider ? provider : launches.provider;

    await repo.save(launches);

    return launches;
  }
}
