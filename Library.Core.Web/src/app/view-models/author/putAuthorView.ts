export class PutAuthorView {
  constructor(
    public id: number = 0,
    public name?: string,
    public birthday: number = 0,
    public deathday: number = 0,
    public books?: BookPutAuthorViewItem[]
  ) { }
}

export class BookPutAuthorViewItem {
  constructor(
    public id: number = 0,
    public name?: string,
    public yearOfPublishing: number = 0
  ) { }
}
