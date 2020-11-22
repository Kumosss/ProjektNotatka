import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Note } from './entity/note.entity';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note) private noteRepository: Repository<Note>,
  ) {}

  async findAll(): Promise<Note[]> {
    return await this.noteRepository.find();
  }

  async findOneById(id: string): Promise<Note | null> {
    return await this.noteRepository.findOne(id);
  }
}
