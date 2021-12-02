import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-esqueci-senha-dialog',
  templateUrl: './esqueci-senha-dialog.component.html',
  styleUrls: ['./esqueci-senha-dialog.component.css']
})
export class EsqueciSenhaDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EsqueciSenhaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit(): void {
  }
  close(){
    this.dialogRef.close();
  }
}
