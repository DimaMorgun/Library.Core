export class PostAuthorView {
  constructor(
    public id: number = 0,
    public name?: string,
    public birthday: number = 0,
    public deathday: number = 0,
    public books?: BookPostAuthorViewItem[]
  ) { }
}

export class BookPostAuthorViewItem {
  constructor(
    public id: number = 0,
    public name?: string,
    public yearOfPublishing: number = 0
  ) { }
}
