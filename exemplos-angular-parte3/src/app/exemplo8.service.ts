import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Postagem {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable()
export class Exemplo8Service {

  constructor(private httpClient: HttpClient) { }


  getFromApi() {
    return this.httpClient.get<Postagem[]>('https://jsonplaceholder.typicode.com/posts');
  }

}
