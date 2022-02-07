import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { Events } from "./Events";
import { Launches } from "./Launches";
import { v4 as uuid } from "uuid";

@Entity("articles")
export class Articles {
  @PrimaryColumn()
  id: string;

  @Column()
  featured: boolean;

  @Column()
  title: string;

  @Column()
  url: string;

  @Column()
  imageUrl: string;

  @Column()
  newsSite: string;

  @Column()
  summary: string;

  @CreateDateColumn()
  publishedAt: Date;

  @Column()
  launches_id: string;

  @Column()
  events_id: string;

  @ManyToOne(() => Launches)
  @JoinColumn({ name: "launches_id" })
  launches: Launches[];

  @ManyToOne(() => Launches)
  @JoinColumn({ name: "events_id" })
  events: Events[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
