import { Pessoa } from './../exemplo5/exemplo5.component';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-exemplo6',
  templateUrl: './exemplo6.component.html',
  styleUrls: ['./exemplo6.component.scss']
})
export class Exemplo6Component implements OnInit {

  public pessoa: Pessoa;
  idiomas = ['Português', 'Inglês', 'Alemão', 'Japonês'].sort();

  formulario: FormGroup;
  nome = new FormControl('', Validators.required);
  sobrenome = new FormControl('', Validators.required);
  email = new FormControl('', Validators.email);
  idioma_id = new FormControl('', Validators.required);
  constructor(private builder: FormBuilder) {
    this.formulario = builder.group({
      'nome': this.nome,
      'sobrenome': this.sobrenome,
      'email': this.email,
      'idioma_id': this.idioma_id
    });
  }

  ngOnInit() {
  }

  public enviar() {
    console.log(this.formulario);
  }

}
