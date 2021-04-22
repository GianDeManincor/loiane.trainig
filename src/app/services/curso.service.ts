import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Curso } from '../model/curso';
import { take } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(private http: HttpClient) { }

  create(curso): Observable<Curso>{
    return this.http.post<Curso>(environment.url, curso)
      .pipe(take(1));
  }

  findAll(): Observable<Curso[]>{
    return this.http.get<Curso[]>(environment.url)
      .pipe(take(1));
  }

  delete(id: number): Observable<any> {
    const endPoint = `/${id}`;
    return this.http.delete(environment.url + endPoint)
      .pipe(take(1));
  }

  update(curso: Curso): Observable<Curso>{
    const endPoint = `/${curso.id}`;
    return this.http.put<Curso>(environment.url + endPoint, curso)
      .pipe(take(1));
  }
}
