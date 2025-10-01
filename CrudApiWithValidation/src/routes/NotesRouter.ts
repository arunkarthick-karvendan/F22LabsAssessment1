import { Router } from "express";
import { NotesController } from "../controller/NotesController";

class NotesRouter {
  public router: Router;
  
  constructor() {
    this.router = Router();
    this.routes();
  }

  private routes(): void {
    this.router.post("/", NotesController.create);
    this.router.get("/", NotesController.getAll);
    this.router.get("/:id", NotesController.getById);
    this.router.put("/:id", NotesController.update);
    this.router.delete("/:id", NotesController.delete);
  }
}

export default new NotesRouter().router;
