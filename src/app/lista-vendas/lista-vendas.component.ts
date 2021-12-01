import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
