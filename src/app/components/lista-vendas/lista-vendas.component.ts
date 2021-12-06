import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-vendas',
  templateUrl: './lista-vendas.component.html',
  styleUrls: ['./lista-vendas.component.css']
})
export class ListaVendasComponent implements OnInit {


  displayedColumns: string[] = ['Produto', 'Preço', 'Max_parcelas'];
  dataSource = [
    {produto: 'Mouse gamer', preco: '25,00', max_parcelas: 4, descricao: 'blablabla'},
    {produto: 'Mouse gamer', preco: '25,00', max_parcelas: 4, descricao: 'blablabla'},
    {produto: 'Mouse gamer', preco: '25,00', max_parcelas: 4, descricao: 'blablabla'},
    {produto: 'Mouse gamer', preco: '25,00', max_parcelas: 4, descricao: 'blablabla'},
    {produto: 'Mouse gamer', preco: '25,00', max_parcelas: 4, descricao: 'blablabla'},
    {produto: 'Mouse gamer', preco: '25,00', max_parcelas: 4, descricao: 'blablabla'},
    {produto: 'Mouse gamer', preco: '25,00', max_parcelas: 4, descricao: 'blablabla'},
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    const userData = JSON.parse(localStorage.getItem('user')!)
    if(!userData) {
      this.router.navigateByUrl('/')
    }
    if(userData.typeAccess != 'ADMIN'){
      this.router.navigateByUrl('/')
    }
  }

}
