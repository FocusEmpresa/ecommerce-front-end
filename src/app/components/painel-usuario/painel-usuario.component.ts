import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  status: string;
  data: string;
  pagamento: string;
}


    const ELEMENT_DATA: PeriodicElement[] = [
      {position: 1, name: 'Mouse Gamer', status: "Enviado", data: '02/12/2021', pagamento: "Cartão de credito"},
    ];
@Component({
  selector: 'app-painel-usuario',
  templateUrl: './painel-usuario.component.html',
  styleUrls: ['./painel-usuario.component.css']
})
export class PainelUsuarioComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'status', 'data', 'pagamento'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
