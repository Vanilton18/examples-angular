import { Component, OnInit } from '@angular/core';
import {Md5} from 'ts-md5/dist/md5';

@Component({
  selector: 'app-exemplo1',
  templateUrl: './exemplo1.component.html',
  styleUrls: ['./exemplo1.component.scss']
})
export class Exemplo1Component implements OnInit {

  constructor() { }

  ngOnInit() {
   // const md5Value = Md5.hashStr('blah blah blah');
   // console.log(md5Value);
  }

}
