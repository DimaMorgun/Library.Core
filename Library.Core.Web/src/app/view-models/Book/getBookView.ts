export class GetBookView {
  constructor(
    public books: BookGetBookViewItem[],
    public allAuthors: AuthorGetBookViewItem[],
    public allPublicationHouses: PublicationHouseGetBookViewItem[]
  ) { }
}

export class BookGetBookViewItem {
  constructor(
    public id: number = 0,
    public name?: string,
    public yearOfPublishing: number = 0,
    public authors?: AuthorGetBookViewItem[],
    public publicationHouses?: PublicationHouseGetBookViewItem[]
  ) { }
}

export class AuthorGetBookViewItem {
  constructor(
    public id: number = 0,
    public name?: string,
    public birthday: number = 0,
    public deathday: number = 0
  ) { }
}

export class PublicationHouseGetBookViewItem {
  constructor(
    public id: number = 0,
    public name?: string,
    public adress?: string
  ) { }
}
