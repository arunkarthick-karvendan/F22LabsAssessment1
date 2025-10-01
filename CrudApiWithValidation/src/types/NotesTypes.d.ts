export type CreateNoteDto = {
    title: string;
    content: string;
    createdBy: string,
    createdAt: Date,
    updatedBy: string,
    updatedAt: Date
}

export type UpdateNoteDto = Partial<CreateNoteDto>;