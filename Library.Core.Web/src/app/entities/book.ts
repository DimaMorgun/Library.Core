import { Author } from "./author";
import { PublicationHouse } from "./publicationHouse";

export class Book {
  constructor(
    public bookId: number = 0,
    public name?: string,
    public yearOfPublishing: number = 0,
    public authors?: Author[],
    public publicationHouses?: PublicationHouse[]
  ) { }
}
