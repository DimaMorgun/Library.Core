export class GetPublicationHouseView {
  constructor(
    public publicationHouses: PublicationHouseGetPublicationHouseViewItem[],
    public allBooks: BookGetPublicationHouseViewItem[]
  ) { }
}

export class PublicationHouseGetPublicationHouseViewItem {
  constructor(
    public id: number = 0,
    public name?: string,
    public adress?: string,
    public books?: BookGetPublicationHouseViewItem[]
  ) { }
}

export class BookGetPublicationHouseViewItem {
  constructor(
    public id: number = 0,
    public name?: string,
    public yearOfPublishing: number = 0
  ) { }
}
