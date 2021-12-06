import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busca-produto',
  templateUrl: './busca-produto.component.html',
  styleUrls: ['./busca-produto.component.css']
})
export class BuscaProdutoComponent implements OnInit {
  list: number[] = [1, 1, 2, 3,1,1,1,1];
  constructor() { }

  ngOnInit(): void {
  }

}
