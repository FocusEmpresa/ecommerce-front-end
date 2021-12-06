import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AlterarUsuarioDialogComponent } from '../alterar-usuario-dialog/alterar-usuario-dialog.component';

@Component({
  selector: 'app-dados-usuario',
  templateUrl: './dados-usuario.component.html',
  styleUrls: ['./dados-usuario.component.css']
})
export class DadosUsuarioComponent implements OnInit {

  constructor(public dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    if(!localStorage.getItem('user')){
      this.router.navigateByUrl('/login')
    }
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AlterarUsuarioDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
