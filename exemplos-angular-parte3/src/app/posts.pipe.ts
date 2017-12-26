import { Postagem } from './exemplo8.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'posts'
})
export class PostsPipe implements PipeTransform {

  transform(posts: Postagem[], busca: string): Postagem[] {
    if (!busca) {
      return posts;
    } else {
      return posts.filter(post => {
        return post.title.toLowerCase().indexOf(busca.toLocaleLowerCase()) >= 0;
      });
    }
  }

}
