export class Note {
  public id: string;
  public title: string;
  public content: string;
  public createdBy: string;
  public createdAt: Date;
  public updatedBy: string;
  public updatedAt: Date;

  constructor(
    id: string,
    title: string,
    content: string,
    createdBy: string,
    createdAt: Date,
    updatedBy: string,
    updatedAt: Date
  ) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.createdBy = createdBy;
    this.createdAt = createdAt;
    this.updatedBy = updatedBy;
    this.updatedAt = updatedAt;
  }
}
