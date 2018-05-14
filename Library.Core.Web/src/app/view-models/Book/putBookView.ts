export class PutBookView {
  constructor(
    public id: number = 0,
    public name?: string,
    public yearOfPublishing: number = 0,
    public authors?: AuthorPutBookViewItem[],
    public publicationHouses?: PublicationHousePutBookViewItem[]
  ) { }
}

export class AuthorPutBookViewItem {
  constructor(
    public id: number = 0,
    public name?: string,
    public birthday: number = 0,
    public deathday: number = 0
  ) { }
}

export class PublicationHousePutBookViewItem {
  constructor(
    public id: number = 0,
    public name?: string,
    public adress?: string
  ) { }
}
