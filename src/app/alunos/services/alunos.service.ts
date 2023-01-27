import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Alunos } from './../model/alunos';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private readonly API =  './assets/alunos.json';

  constructor(private httpClient:HttpClient) { }

  lista(){
    return this.httpClient.get<Alunos[]>(this.API)
    .pipe(
      tap(alunos => console.log(alunos))
    )
  }
}
