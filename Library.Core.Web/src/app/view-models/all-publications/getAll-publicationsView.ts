export class GetAllPublicationsView {
  constructor(
    public publications: PublicationGetAllPublicationsViewItem[]
  ) { }
}

export class PublicationGetAllPublicationsViewItem {
  constructor(
    public id: number = 0,
    public name?: string,
    public type?: string
  ) { }
}
