export class PutPublicationHouseView {
  constructor(
    public publicationHouseId: number = 0,
    public name?: string,
    public adress?: string,
    public books?: BookPutPublicationHouseViewItem[]
  ) { }
}

export class BookPutPublicationHouseViewItem {
  constructor(
    public bookId: number = 0,
    public name?: string,
    public yearOfPublishing: number = 0
  ) { }
}
