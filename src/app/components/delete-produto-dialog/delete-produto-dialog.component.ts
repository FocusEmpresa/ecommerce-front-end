import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-produto-dialog',
  templateUrl: './delete-produto-dialog.component.html',
  styleUrls: ['./delete-produto-dialog.component.css']
})
export class DeleteProdutoDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteProdutoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

  ngOnInit(): void {
  }
}
