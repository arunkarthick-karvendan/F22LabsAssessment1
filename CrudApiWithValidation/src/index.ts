import app from "./app";

class Server {
  private port: number;

  constructor(port: number) {
    this.port = port;
  }

  public start(): void {
    app.listen(this.port, () => {
      console.log(`Server is running on port : ${this.port}`);
    });
  }
}

const PORT = Number(process.env.PORT) || 3000;
const server = new Server(PORT);
server.start();
