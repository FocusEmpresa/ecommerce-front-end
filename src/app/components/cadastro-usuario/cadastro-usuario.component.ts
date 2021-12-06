import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UserDTO } from 'src/app/dtos/user/user.dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  user: UserDTO = {
    name: '',
    nickname: '',
    email: '',
    password: '',
    sex: '',
    birthday: ''
  }

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('user')){
      this.router.navigateByUrl('/')
    }
  }

  async createUser() {
   
    this.user.birthday = new Date(this.user.birthday!).toISOString()

    this.userService.createUser(this.user).subscribe((resp) => {
      console.log('Usuário criado!')
    })
  }

}
