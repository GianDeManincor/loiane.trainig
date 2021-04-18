import { Component, OnInit } from '@angular/core';
import { Curso } from '../model/curso';
import { CursoService } from '../services/curso.service';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.scss']
})
export class ListaCursosComponent implements OnInit {

  cursos: Curso[];
  nomeCurso: string;

  showTabela = true;
  showAlterar = false;
  showNovoCurso = false;

  constructor(private cursoService: CursoService) { }

  ngOnInit(): void {
    this.cursoService.findAll().subscribe(dados => this.cursos = dados);
  }

  find(){
    this.cursoService.findAll().subscribe(dados => this.cursos = dados);
  }

  createCourse(){
    this.cursoService.create(this.getCurso())
      .subscribe(
        success => this.find(),
        error => console.error("Erro!")
      );
    this.novoCursoToTabela();
  }

  deleteCourse(id: number){
    console.log(this.cursos);
    this.cursoService.delete(id).subscribe(
      success => this.find()
    );
  }

  openNovoCurso() {
    this.showTabela = false;
    this.showNovoCurso = true;
  }

  novoCursoToTabela(){
    this.showNovoCurso = false;
    this.showTabela = true;
  }

  getCurso(){
    var curso = {
      id: null,
      nome: this.nomeCurso
    }
    return curso;
  }
}
