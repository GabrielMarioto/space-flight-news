import { getRepository } from "typeorm";
import { Launches } from "../entities/Launches";

export class DeleteLauncheService {
  async execute(id: string) {
    const repo = getRepository(Launches);

    if (!(await repo.findOne(id))) {
      return new Error("Launche does not exists!");
    }

    await repo.delete(id);
  }
}
