import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EsqueciSenhaDialogComponent } from '../esqueci-senha-dialog/esqueci-senha-dialog.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(EsqueciSenhaDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
