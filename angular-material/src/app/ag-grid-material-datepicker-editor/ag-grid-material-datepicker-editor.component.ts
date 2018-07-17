import { Component, OnInit, ViewChild } from '@angular/core';
import { ICellEditorParams } from 'ag-grid/main';
import { AgEditorComponent, } from 'ag-grid-angular';
import { MatDatepicker } from '@angular/material';

@Component({
  selector: 'app-ag-grid-material-datepicker-editor',
  templateUrl: './ag-grid-material-datepicker-editor.component.html',
  styleUrls: ['./ag-grid-material-datepicker-editor.component.scss'],
})
export class AgGridMaterialDatepickerEditorComponent implements OnInit, AgEditorComponent {
  columnWidth: string;
  params: ICellEditorParams;
  public value: string;
  @ViewChild('picker', { read: MatDatepicker }) picker: MatDatepicker<Date>;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.picker.open();
  }

  isPopup(): boolean {
    return false;
  }

  isCancelBeforeStart(): boolean {
    return false;
  }

  isCancelAfterEnd(): boolean {
    return false;
  }

  agInit(params: any): void {
    this.params = params;
    this.value = params.value;
  }

  getValue(): string {
    return this.value;
  }

  onSelectChange(e): void {
    setTimeout(function () {
      this.params.stopEditing();
    }.bind(this));
  }

}
