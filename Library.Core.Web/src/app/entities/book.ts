export class Book {
  constructor(
    public bookId?: number,
    public name?: string,
    public yearOfPublishing?: number,
    public selectedAuthors?: number[],
    public selectedPublicationHouses ?: number[]) { }
}
