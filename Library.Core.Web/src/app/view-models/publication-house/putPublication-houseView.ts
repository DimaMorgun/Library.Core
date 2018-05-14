export class PutPublicationHouseView {
  constructor(
    public id: number = 0,
    public name?: string,
    public adress?: string,
    public books?: BookPutPublicationHouseViewItem[]
  ) { }
}

export class BookPutPublicationHouseViewItem {
  constructor(
    public id: number = 0,
    public name?: string,
    public yearOfPublishing: number = 0
  ) { }
}
