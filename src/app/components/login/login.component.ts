import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserDTO } from 'src/app/dtos/user/user.dto';
import { UserService } from 'src/app/services/user.service';
import { EsqueciSenhaDialogComponent } from '../esqueci-senha-dialog/esqueci-senha-dialog.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: UserDTO = {
    email: '',
    password: ''
  }

  constructor(public dialog: MatDialog, private userService: UserService) { }

  ngOnInit(): void {

  }

  loginUser() {
    this.userService.loginUser(this.user).subscribe(() => {
      console.log('Usuário logado!')
    })
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
