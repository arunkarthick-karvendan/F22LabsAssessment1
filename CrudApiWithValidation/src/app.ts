import express, { Application } from 'express';
import NotesRouter from './routes/NotesRouter';
import { ErrorHandler } from './middleware/ErrorHandler'

class App{
    public app: Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
        this.errorHandler();
    }

    private config():void{
        this.app.use(express.json())
    }

    private routes(): void {
        this.app.use('/notes', NotesRouter)
    }

    private errorHandler(): void{
        this.app.use(ErrorHandler.handle)
    }

}

export default new App().app;