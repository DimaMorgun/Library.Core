import { Author } from "./author";
import { Book } from "./book";

export class AuthorsBooksViewModel {
  constructor(
    public authors: Author[],
    public allBooks: Book[]
  ) { }
}
