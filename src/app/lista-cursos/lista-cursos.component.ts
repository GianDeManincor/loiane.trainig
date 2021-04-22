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
  curso: Curso;

  showTabela = true;
  showAlterar = false;
  showNovoCurso = false;
  update = false;

  constructor(private cursoService: CursoService) { }

  ngOnInit(): void {
    this.cursoService.findAll().subscribe(dados => this.cursos = dados);
    this.curso = {id: '', nome: ''};
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
    this.goToTabela();
  }

  deleteCourse(id: number){
    this.cursoService.delete(id).subscribe(
      success => this.find()
    );
  }

  openUpdateCourse(curso: Curso){
    this.curso.id = curso.id;
    this.curso.nome = curso.nome;
    this.showTabela = false;
    this.showNovoCurso = true;
    this.update = true;
  }

  updateCourse(){
    this.cursoService.update(this.getCurso()).subscribe(
      success => this.find()
    )
    this.goToTabela();
  }

  openNovoCurso() {
    this.showTabela = false;
    this.showNovoCurso = true;
  }

  goToTabela(){
    this.update = false;
    this.showNovoCurso = false;
    this.showTabela = true;
    this.curso = {id: '', nome: ''};
  }

  getCurso(){
    var curso;
    if(this.update){
      curso = {
        id: this.curso.id,
        nome: this.curso.nome
      }
    }else {
      curso = {
        id: null,
        nome: this.curso.nome
      }
    }
    return curso;
  }
}
