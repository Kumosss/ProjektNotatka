import { NoteSeeder } from "seeders/note.seed";
import {getRepository, MigrationInterface, QueryRunner} from "typeorm";

export class SeedNotes1606073000651 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await getRepository("note").save(NoteSeeder);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
