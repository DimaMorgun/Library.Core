import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { State, process } from '@progress/kendo-data-query';

import { MagazineService } from '../../../services/magazine.service';

import { Magazine } from '../../../entities/magazine';

@Component({
  selector: 'app-magazine',
  templateUrl: './magazine.component.html',
  styleUrls: ['./magazine.component.css']
})

export class MagazineComponent implements OnInit {
  private editedRowIndex: number;
  private editedMagazine: Magazine;

  public magazines: Magazine[] = [];

  public gridState: State = {
    sort: [],
    skip: 0,
    take: 10
  };

  constructor(private magazineService: MagazineService) {
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

    sender.addRow(new Magazine());
  }

  public editHandler({ sender, rowIndex, dataItem }) {
    this.closeEditor(sender);

    this.editedRowIndex = rowIndex;
    this.editedMagazine = Object.assign({}, dataItem);

    sender.editRow(rowIndex);
  }

  public cancelHandler({ sender, rowIndex }) {
    this.closeEditor(sender, rowIndex);
  }

  public saveHandler({ sender, rowIndex, dataItem, isNew }) {
    if (isNew) {
      this.magazineService.postMagazine(dataItem).subscribe(data => this.refresh());
    }
    if (!isNew) {
      this.magazineService.putMagazine(dataItem).subscribe(data => this.refresh());
    }

    sender.closeRow(rowIndex);

    this.editedRowIndex = undefined;
    this.editedMagazine = undefined;
  }

  public removeHandler({ dataItem }) {
    this.magazineService.deleteMagazine(dataItem.id).subscribe(data => this.refresh());
  }

  private closeEditor(grid, rowIndex = this.editedRowIndex) {
    grid.closeRow(rowIndex);

    this.refresh();
    this.editedRowIndex = undefined;
    this.editedMagazine = undefined;
  }

  private refresh() {
    this.magazineService.getMagazine().subscribe(data => {
      this.magazines = data.magazines;
    });
  }
}
