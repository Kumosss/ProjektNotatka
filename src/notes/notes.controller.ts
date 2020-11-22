import { Controller, Get } from '@nestjs/common';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {

    constructor(private readonly notesService: NotesService) {}

    @Get()
    async all() {
        return await this.notesService.findAll();
    }

    @Get('/:id')
    async oneById(id: string) {
        return await this.notesService.findOneById(id);
    }
}
