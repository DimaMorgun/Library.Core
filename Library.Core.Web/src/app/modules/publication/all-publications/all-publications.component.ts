import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { State, process } from '@progress/kendo-data-query';

import { AllPublicationsService } from '../../../services/all-publications';

import { Publication } from '../../../entities/all-publications';

@Component({
  selector: 'app-all-publications',
  templateUrl: './all-publications.component.html',
  styleUrls: ['./all-publications.component.css']
})
export class AllPublicationsComponent implements OnInit {
  private editedRowIndex: number;
  private editedPublication: Publication;

  public allPublications: Publication[] = [];

  public gridState: State = {
    sort: [],
    skip: 0,
    take: 10
  };

  constructor(private allPublicationsService: AllPublicationsService) {
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

    sender.addRow(new Publication());
  }

  public editHandler({ sender, rowIndex, dataItem }) {
    this.closeEditor(sender);

    this.editedRowIndex = rowIndex;
    this.editedPublication = Object.assign({}, dataItem);

    sender.editRow(rowIndex);
  }

  public cancelHandler({ sender, rowIndex }) {
    this.closeEditor(sender, rowIndex);
  }

  public removeHandler({ dataItem }) {
    this.allPublicationsService.deleteAllPublications(dataItem).subscribe(data => this.refresh());
  }

  private closeEditor(grid, rowIndex = this.editedRowIndex) {
    grid.closeRow(rowIndex);

    this.refresh();
    this.editedRowIndex = undefined;
    this.editedPublication = undefined;
  }

  private refresh() {
    this.allPublicationsService.getAllPublications().subscribe(data => {
      this.allPublications = data.publications;
    });
  }
}
