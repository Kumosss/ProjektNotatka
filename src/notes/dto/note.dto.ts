import { IsNotEmpty } from "class-validator";

export class NoteDto {
    @IsNotEmpty()
    id: string;

    @IsNotEmpty()
    description: string;
}