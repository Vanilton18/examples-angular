import { Exemplo6Component } from './exemplo6/exemplo6.component';
import { Exemplo7Component } from './exemplo7/exemplo7.component';
import { Exemplo8Component } from './exemplo8/exemplo8.component';
import { Exemplo404Component } from './exemplo404/exemplo404.component';
import { Exemplo3Component } from './exemplo3/exemplo3.component';
import { Exemplo2Component } from './exemplo2/exemplo2.component';
import { Exemplo1Component } from './exemplo1/exemplo1.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Exemplo5Component } from './exemplo5/exemplo5.component';

const routes: Routes = [
  {
    path: '', // URL Raiz
    component: Exemplo1Component
  },
  {
    path: 'exemplo2', // URL especifica
    component: Exemplo2Component
  },
  {
    path: 'exemplo3/:id',
    component: Exemplo3Component
  },
  {
    path: 'exemplo404',
    component: Exemplo404Component
  },
  {
    path: 'exemplo5',
    component: Exemplo5Component
  },
  {
    path: 'exemplo6',
    component: Exemplo6Component
  },
  {
    path: 'exemplo7',
    component: Exemplo7Component
  },
  {
    path: 'exemplo8',
    component: Exemplo8Component
  },
  {
    path: '**',
    component: Exemplo404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
