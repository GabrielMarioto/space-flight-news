import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("launches")
export class Launches {
  @PrimaryColumn()
  id: string;

  @Column()
  provider: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
