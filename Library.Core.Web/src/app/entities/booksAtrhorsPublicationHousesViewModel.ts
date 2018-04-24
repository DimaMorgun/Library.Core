import { Book } from "./book";
import { Author } from "./author";
import { PublicationHouse } from "./publicationHouse";

export class BookAuthorsPublicationHousesViewModel {
  constructor(
    public books: Book[],
    public allAuthors: Author[],
    public allPublicationHouses: PublicationHouse[]
  ) { }
}
