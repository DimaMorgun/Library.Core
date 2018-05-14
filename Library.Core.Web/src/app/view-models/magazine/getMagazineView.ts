export class GetMagazineView {
  constructor(
    public magazines: MagazineGetMagazineViewItem[]
  ) { }
}

export class MagazineGetMagazineViewItem {
  constructor(
    public id: number = 0,
    public name?: string,
    public number: number = 0,
    public yearOfPublishing: number = 0
  ) { }
}
