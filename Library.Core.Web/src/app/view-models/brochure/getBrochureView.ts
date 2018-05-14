export class GetBrochureView {
  constructor(
    public brochures: BrochureGetBrochureViewItem[]
  ) { }
}

export class BrochureGetBrochureViewItem {
  constructor(
    public id: number = 0,
    public name?: string,
    public typeOfCover?: string,
    public numberOfPages: number = 0
  ) { }
}
