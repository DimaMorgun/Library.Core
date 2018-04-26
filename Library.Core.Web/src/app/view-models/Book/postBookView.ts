export class PostBookView {
  constructor(
    public bookId: number = 0,
    public name?: string,
    public yearOfPublishing: number = 0,
    public authors?: AuthorPostBookViewItem[],
    public publicationHouses?: PublicationHousePostBookViewItem[]
  ) { }
}

export class AuthorPostBookViewItem {
  constructor(
    public authorId: number = 0,
    public name?: string,
    public birthday: number = 0,
    public deathday: number = 0
  ) { }
}

export class PublicationHousePostBookViewItem {
  constructor(
    public publicationHouseId: number = 0,
    public name?: string,
    public adress?: string
  ) { }
}
