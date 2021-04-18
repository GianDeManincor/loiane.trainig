import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Curso } from '../model/curso';
import { take } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(private http: HttpClient) { }

  create(curso){
    return this.http.post(environment.url, curso).pipe(take(1));
  }

  findAll(){
    return this.http.get<Curso[]>(environment.url)
      .pipe(take(1));
  }

  delete(id: number) {
    const endPoint = `/${id}`;
    return this.http.delete(environment.url + endPoint)
      .pipe(take(1));
  }
}
