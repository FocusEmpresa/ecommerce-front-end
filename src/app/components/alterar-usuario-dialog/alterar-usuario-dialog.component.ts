import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdressDTO } from 'src/app/dtos/adresses/adress.dto';
import { AdressService } from 'src/app/services/adress.service';

@Component({
  selector: 'app-alterar-usuario-dialog',
  templateUrl: './alterar-usuario-dialog.component.html',
  styleUrls: ['./alterar-usuario-dialog.component.css'],
})
export class AlterarUsuarioDialogComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  adress:AdressDTO= {
    cep: '',
    identify: '',
    road: '',
    number: 0,
    complement: '',
    reference: '',
    district: '',
    city: '',
    state: '',

  }



  constructor(public dialogRef: MatDialogRef<AlterarUsuarioDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private adressService: AdressService, private router: Router
    ,private _snackBar: MatSnackBar,) {}
  onBlurMethod() {
    this.pesquisacep(this.adress.cep!);
  }

  encontrado: boolean = false;

  meu_callback(conteudo: any) {
    fetch(conteudo)
      .then((response) => response.json())
      .then((result) => {
        this.adress.road = result.logradouro;
        this.adress.district = result.bairro;
        this.adress.city = result.localidade;
        this.adress.state = result.uf;
      })
      .catch((err) => {
        alert('CEP inválido!!!');
      });
  }

  pesquisacep(valor: String) {
    //Nova variável "cep" somente com dígitos.
    var cep = '';
    if (valor != undefined) {
      cep = valor.replace(/\D/g, '');
    }

    //Verifica se campo cep possui valor informado.
    if (cep != '') {
      //Expressão regular para validar o CEP.
      var validacep = /^[0-9]{8}$/;

      //Valida o formato do CEP.
      if (validacep.test(cep)) {
        this.encontrado = true;
        //Preenche os campos com "..." enquanto consulta webservice.
        this.adress.road = '...';
        this.adress.district = '...';
        this.adress.city = '...';

        //Sincroniza com o callback.
        const url = 'https://viacep.com.br/ws/' + cep + '/json/';
        this.meu_callback(url);
      } //end if.
      else {
        //cep é inválido.
        alert('Formato de CEP inválido.');
      }
    } //end if.
  }

  ngOnInit(): void {}
close(){
  this.dialogRef.close();
}

  async createAdress() {
   
    if(this.adress.cep && this.adress.city && this.adress.complement && this.adress.district &&
      this.adress.identify &&this.adress.number && this.adress.reference &&
      this.adress.road &&this.adress.state){
    this._snackBar.open('Endereço cadastrado com sucesso', 'Fechar', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 5000,
    });
    this.adressService.createAdress(this.adress).subscribe((resp) => {
      console.log('Endereço criado!')
    })
  } else {
    this._snackBar.open('Endereço não foi cadastrado! Todos campos devem ser preenchidos', 'Fechar', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 5000,
    });
    return;
  }
    this.dialogRef.close();
  }
}

