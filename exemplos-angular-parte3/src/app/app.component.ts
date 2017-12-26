import { Exemplo2Component } from './exemplo2/exemplo2.component';
import { Component } from '@angular/core';
import { Exemplo1Component } from './exemplo1/exemplo1.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
}
