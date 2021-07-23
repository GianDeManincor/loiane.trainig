import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  filtro:string;

  livros:Array<String> = ["Java", "Angular 2"];

  constructor() { }

  ngOnInit(): void {
  }

  adicionarLivro(livro){
    this.livros.push(livro);
  }

  obterLivros(){

    if(this.livros.length === 0 || this.filtro === undefined
    || this.filtro.trim() === '') {
      return this.livros;
    }

    return this.livros.filter(livro => {
        if(livro.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0){
          return true;
        }
        return false;
      });
  }

}
