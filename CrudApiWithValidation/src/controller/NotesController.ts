import { NotesService } from "../service/NotesService";
import { Request, Response } from "express";

export class NotesController {
  public static getAll(req: Request, res: Response) {
    res.json(NotesService.getAll());
  }

  public static getById(req: Request, res: Response) {
    if (!req.params.id || req.params.id === "") {
      res.status(400).json({
        message: "Bad Request - Id is mandatory",
      });
      return;
    }
    const note = NotesService.getById(req.params.id);
    if (!note) {
      res.status(404).json({
        message: "Note Not Found",
      });
      return;
    }
    res.json(note);
  }

  public static create(req: Request, res: Response) {
    const { title, content, createdBy, createdAt } = req.body;
    if (!title || !content) {
      res.status(400).json({
        message: "Bad Request - Title and Content are mandatory",
      });
      return;
    }
    const newNote = NotesService.create({
      title,
      content,
      createdBy,
      createdAt,
      updatedBy: createdBy,
      updatedAt: createdAt,
    });
    res.status(201).json(newNote);
  }

  public static update(req: Request, res: Response) {
    if (!req.params.id || req.params.id === "") {
      res.status(400).json({
        message: "Bad Request - Id is mandatory",
      });
      return;
    }
    const note = NotesService.update(req.params.id, req.body);
    if (!note) {
      res.status(404).json({
        message: "Note Not Found",
      });
      return;
    }
    res.json(note);
  }

  public static delete(req: Request, res: Response) {
    if (!req.params.id || req.params.id === "") {
      res.status(400).json({
        message: "Bad Request - Id is mandatory",
      });
      return;
    }
    const deleted = NotesService.delete(req.params.id);
    if (!deleted) {
      res.status(404).json({
        message: "Note Not Found",
      });
      return;
    }
    res.status(204).send();
  }
}
