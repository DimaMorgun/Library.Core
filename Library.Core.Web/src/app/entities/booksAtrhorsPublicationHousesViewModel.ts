import { Book } from "./book";
import { Author } from "./author";
import { PublicationHouse } from "./publicationHouse";

export class BookAuthorsPublicationHousesViewModel {
  constructor(
    public book: Book[],
    public allAuthors: Author[],
    public allPublicationHouses: PublicationHouse[]
  ) { }
}
