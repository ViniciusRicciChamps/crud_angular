import { Alunos } from './../model/alunos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.scss']
})
export class AlunosComponent implements OnInit {

  aluno: Alunos[] = [
    {
      nome: "1-618-852-7434",
      idade: "ac.mi@outlook.edu",
      nomeMae: "Penelope Nieves",
      nomePai: "627-7868 Nulla Rd.",
      numeroRG: "8646",
      estadoEndereco: "Atacama",
      cepEndereco: "Nigeria",
      nomeRuaEndereco: "932-3913 Dui Av.",
      curso: "morbi tristique senectus et netus et malesuada fames ac turpis",
      cidadeEndereco: "Nascetur Ridiculus Ltd",
      _id: "72410"
    },
    {
      nome: "1-584-535-1721",
      idade: "fermentum.metus@yahoo.com",
      nomeMae: "Nathan Branch",
      nomePai: "396-3257 Vehicula Ave",
      numeroRG: "334977",
      estadoEndereco: "Vlaams-Brabant",
      cepEndereco: "Singapore",
      nomeRuaEndereco: "674-1032 Nonummy Avenue",
      curso: "Aliquam nec enim. Nunc ut erat. Sed nunc est, mollis",
      cidadeEndereco: "Tincidunt Adipiscing Mauris Corporation",
      _id: "44-736"
    },
    {
      nome: "1-561-164-1662",
      idade: "non.lorem@protonmail.couk",
      nomeMae: "Kieran Chandler",
      nomePai: "P.O. Box 348, 2611 Ac Ave",
      numeroRG: "7671",
      estadoEndereco: "Cartago",
      cepEndereco: "Norway",
      nomeRuaEndereco: "P.O. Box 551, 7074 Ut Av.",
      curso: "non, dapibus rutrum, justo. Praesent luctus. Curabitur egestas nunc sed",
      cidadeEndereco: "Mauris A Nunc Company",
      _id: "00647"
    },
    {
      nome: "1-741-332-7472",
      idade: "dictum.ultricies@outlook.ca",
      nomeMae: "Derek Frederick",
      nomePai: "859-5384 Pretium Avenue",
      numeroRG: "2444",
      estadoEndereco: "Tasmania",
      cepEndereco: "Austria",
      nomeRuaEndereco: "P.O. Box 761, 9070 Pharetra Rd.",
      curso: "Etiam imperdiet dictum magna. Ut tincidunt orci quis lectus. Nullam",
      cidadeEndereco: "Euismod Urna Nullam LLC",
      _id: "94156"
    },
    {
      nome: "(912) 627-4511",
      idade: "in@protonmail.edu",
      nomeMae: "Genevieve Black",
      nomePai: "P.O. Box 412, 2481 Donec Street",
      numeroRG: "4246",
      estadoEndereco: "Luhansk oblast",
      cepEndereco: "Russian Federation",
      nomeRuaEndereco: "P.O. Box 683, 4406 Lorem Av.",
      curso: "consectetuer, cursus et, magna. Praesent interdum ligula eu enim. Etiam",
      cidadeEndereco: "Interdum Sed Ltd",
      _id: "523656"
    }

  ];

  displayedColumns = ['nome', 'idade', 'nomeMae', 'nomePai', 'numeroRG', 'estadoEndereco',
    'cidadeEndereco', 'cepEndereco', 'nomeRuaEndereco', 'curso'];
  constructor() {
    //this.aluno = [];
  }

  ngOnInit(): void {
  }

}
