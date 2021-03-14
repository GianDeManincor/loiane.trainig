import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  nomeCurso: string = 'Angular';

  verificaNovoValor(evento){
    console.log(evento.novoValor);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
