import { Note } from "../model/NotesModel";
import { CreateNoteDto, UpdateNoteDto } from "../types/NotesTypes";
import { v4 as uuid4 } from "uuid";

export class NotesService {
  private static notes: Note[] = [];

  public static getAll(): Note[] {
    return this.notes;
  }

  public static getById(id: string): Note | undefined {
    return this.notes.find((note) => note.id === id);
  }

  public static create(data: CreateNoteDto): Note {
    const newNote = new Note(
      uuid4(),
      data.title,
      data.content,
      data.createdBy,
      data.createdAt,
      data.updatedBy,
      data.updatedAt
    );
    this.notes.push(newNote);
    return newNote;
  }

  public static update(id: string, data: UpdateNoteDto): Note | null {
    const note = this.getById(id);
    if (!note) {
      return null;
    }

    note.title = data.title ?? note.title;
    note.content = data.content ?? note.content;
    note.updatedBy = data.updatedBy ?? note.updatedBy;
    note.updatedAt = new Date();

    return note;
  }
  public static delete(id: string): boolean {
    const index = this.notes.findIndex((note) => note.id === id);
    if (index === -1) {
      return false;
    }
    this.notes.splice(index, 1);
    return true;
  }
}
