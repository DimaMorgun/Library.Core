export class PostPublicationHouseView {
  constructor(
    public id: number = 0,
    public name?: string,
    public adress?: string,
    public books?: BookPostPublicationHouseViewItem[]
  ) { }
}

export class BookPostPublicationHouseViewItem {
  constructor(
    public id: number = 0,
    public name?: string,
    public yearOfPublishing: number = 0
  ) { }
}
