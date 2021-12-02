import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductDTO } from 'src/app/dtos/products/product.dto';

@Component({
  selector: 'app-editar-produto-dialog',
  templateUrl: './editar-produto-dialog.component.html',
  styleUrls: ['./editar-produto-dialog.component.css']
})
export class EditarProdutoDialogComponent implements OnInit {

  product: ProductDTO = {};

  constructor(public dialogRef: MatDialogRef<EditarProdutoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit(): void {
    console.log(this.data)
    this.product = this.data
  }

  close() {
    this.dialogRef.close()
  }

  editar() {
    this.dialogRef.close()
  }
}
