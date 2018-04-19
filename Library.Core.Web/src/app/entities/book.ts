import { Author } from "./author";

export class Book {
  constructor(
    public bookId: number = 0,
    public name?: string,
    public yearOfPublishing: number = 0,
    public authors?: Author[],
    public selectedAuthors?: number[],
    public selectedPublicationHouses?: number[]
  ) { }
}
