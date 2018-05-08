export class Brochure {
  constructor(
    public brochureId: number = 0,
    public name?: string,
    public typeOfCover?: string,
    public numberOfPages: number = 0
  ) { }
}
