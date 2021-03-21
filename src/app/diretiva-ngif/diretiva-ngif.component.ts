import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.scss']
})
export class DiretivaNgifComponent implements OnInit {

  lista: any = 0;

  constructor() { }

  ngOnInit(): void {
  }

  adicionar(){
    this.lista++;
  }

  limpar(){
    this.lista = 0;
  }
}
