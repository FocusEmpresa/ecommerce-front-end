import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
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

  constructor(public dialog: MatDialog, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('user')){
      this.router.navigateByUrl('/')
    }
  }

  loginUser() {
    console.log('Sendo chamada 1')
    this.userService.loginUser(this.user).subscribe((resp) => {
      this.userService.getUserLogged(this.user.email!).subscribe((response: any) => {
        if(resp) {
          let data = {
            _id: response['user']._id,
            name: response['user'].name,
            email: response['user'].email,
            typeAccess: response['user'].typeAccess,
            logged: true
          }
          localStorage.setItem('user', JSON.stringify(data))
          this.router.navigateByUrl('/')
        }
      })
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
