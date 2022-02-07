import { getRepository } from "typeorm";
import { Launches } from "../entities/Launches";

export class GetAllLaunchesService {
  async execute() {
    const repo = getRepository(Launches);

    const launches = await repo.find();

    return launches;
  }
}
