export class PutMagazineView {
  constructor(
    public magazineId: number = 0,
    public name?: string,
    public number: number = 0,
    public yearOfPublishing: number = 0
  ) { }
}
