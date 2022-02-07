import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateArticles1644254313506 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "articles",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "featured",
            type: "boolean",
            default: false,
          },
          {
            name: "title",
            type: "varchar",
          },
          {
            name: "url",
            type: "varchar",
          },
          {
            name: "imageUrl",
            type: "varchar",
          },
          {
            name: "newsSite",
            type: "varchar",
          },
          {
            name: "summary",
            type: "varchar",
          },
          {
            name: "publishedAt",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "launches_id",
            type: "uuid",
          },
          {
            name: "events_id",
            type: "uuid",
          },
        ],
        foreignKeys: [
          {
            name: "fk_articles_launches",
            columnNames: ["launches_id"],
            referencedTableName: "launches",
            referencedColumnNames: ["id"],
          },
          {
            name: "fk_articles_events",
            columnNames: ["events_id"],
            referencedTableName: "events",
            referencedColumnNames: ["id"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("articles");
  }
}
