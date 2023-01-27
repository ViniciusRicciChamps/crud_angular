import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Alunos } from './../model/alunos';
import { AlunosService } from './../services/alunos.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.scss']
})
export class AlunosComponent implements OnInit {

  aluno: Observable<Alunos[]>;
  displayedColumns = ['_id', 'nome', 'idade', 'nomeMae', 'nomePai', 'numeroRG', 'estadoEndereco',
    'cidadeEndereco', 'cepEndereco', 'nomeRuaEndereco', 'curso'];


  constructor(private alunosService: AlunosService) {
    this.aluno = this.alunosService.lista();
  }

  ngOnInit(): void {
  }

}
