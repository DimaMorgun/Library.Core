import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { State, process } from '@progress/kendo-data-query';

import { BrochureService } from '../../../services/brochure.service';

import { Brochure } from '../../../entities/brochure';

@Component({
  selector: 'app-brochure',
  templateUrl: './brochure.component.html',
  styleUrls: ['./brochure.component.css']
})
export class BrochureComponent implements OnInit {
  private editedRowIndex: number;
  private editedBrochure: Brochure;

  public brochures: Brochure[] = [];

  public gridState: State = {
    sort: [],
    skip: 0,
    take: 10
  };

  constructor(private brochureService: BrochureService) {
  }

  public ngOnInit(): void {
    this.refresh();
  }

  public onStateChange(state: State) {
    this.gridState = state;
  }

  public addHandler({ sender }, formInstance) {
    formInstance.reset();
    this.closeEditor(sender);

    sender.addRow(new Brochure());
  }

  public editHandler({ sender, rowIndex, dataItem }) {
    this.closeEditor(sender);

    this.editedRowIndex = rowIndex;
    this.editedBrochure = Object.assign({}, dataItem);

    sender.editRow(rowIndex);
  }

  public cancelHandler({ sender, rowIndex }) {
    this.closeEditor(sender, rowIndex);
  }

  public saveHandler({ sender, rowIndex, dataItem, isNew }) {
    if (isNew) {
      this.brochureService.postBrochure(dataItem).subscribe(data => this.refresh());
    }
    if (!isNew) {
      this.brochureService.putBrochure(dataItem).subscribe(data => this.refresh());
    }

    sender.closeRow(rowIndex);

    this.editedRowIndex = undefined;
    this.editedBrochure = undefined;
  }

  public removeHandler({ dataItem }) {
    this.brochureService.deleteBrochure(dataItem.brochureId).subscribe(data => this.refresh());
  }

  private closeEditor(grid, rowIndex = this.editedRowIndex) {
    grid.closeRow(rowIndex);

    this.refresh();
    this.editedRowIndex = undefined;
    this.editedBrochure = undefined;
  }

  private refresh() {
    this.brochureService.getBrochure().subscribe(data => {
      this.brochures = data.brochures;
    });
  }
}
