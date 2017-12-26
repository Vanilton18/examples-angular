import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Exemplo8Service, Postagem } from './../exemplo8.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo8',
  templateUrl: './exemplo8.component.html',
  styleUrls: ['./exemplo8.component.scss']
})
export class Exemplo8Component implements OnInit {

  public postagens: Postagem[];

  public busca = new FormControl();

  constructor(private service: Exemplo8Service) { }

  public getAllPosts() {
    this.service.getFromApi().subscribe(response => {
      this.postagens = response;
    },
    (errors) => {
      console.error(errors);
    });
  }

  ngOnInit() {
    this.postagens = new Array<Postagem>();
    this.getAllPosts();
  }

}
