export class PostAuthorView {
  constructor(
    public authorId: number = 0,
    public name?: string,
    public birthday: number = 0,
    public deathday: number = 0,
    public books?: BookPostAuthorViewItem[]
  ) { }
}

export class BookPostAuthorViewItem {
  constructor(
    public bookId: number = 0,
    public name?: string,
    public yearOfPublishing: number = 0
  ) { }
}
