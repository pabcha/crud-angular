import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-new-category-dialog',
  templateUrl: './new-category-dialog.component.html',
  styleUrls: ['./new-category-dialog.component.css']
})
export class NewCategoryDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NewCategoryDialogComponent>) {}

  ngOnInit() {
  }

  onSubmit(value) {
    this.dialogRef.close(value.name);
  }

}
