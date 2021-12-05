import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alterar-usuario-dialog',
  templateUrl: './alterar-usuario-dialog.component.html',
  styleUrls: ['./alterar-usuario-dialog.component.css'],
})
export class AlterarUsuarioDialogComponent implements OnInit {
  cep: any;

  rua: String = '';
  bairro: String = '';
  cidade: String = '';
  uf: String = '';

  constructor() {}
  onBlurMethod() {
    this.pesquisacep(this.cep);
  }

  encontrado: boolean = false;

  meu_callback(conteudo: any) {
    fetch(conteudo)
      .then((response) => response.json())
      .then((result) => {
        this.rua = result.logradouro;
        this.bairro = result.bairro;
        this.cidade = result.localidade;
        this.uf = result.uf;
        console.log(this.rua);
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
        this.rua = '...';
        this.bairro = '...';
        this.cidade = '...';

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
}
