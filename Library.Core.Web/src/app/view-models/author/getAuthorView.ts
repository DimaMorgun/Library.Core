export class GetAuthorView {
  constructor(
    public authors: AuthorGetAuthorViewItem[],
    public allBooks: BookGetAuthorViewItem[]
  ) { }
}

export class AuthorGetAuthorViewItem {
  constructor(
    public id: number = 0,
    public name?: string,
    public birthday: number = 0,
    public deathday: number = 0,
    public books?: BookGetAuthorViewItem[]
  ) { }
}

export class BookGetAuthorViewItem {
  constructor(
    public id: number = 0,
    public name?: string,
    public yearOfPublishing: number = 0
  ) { }
}
