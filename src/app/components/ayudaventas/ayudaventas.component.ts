import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment.prod';

@Component({
  selector: 'app-ayudaventas',
  templateUrl: './ayudaventas.component.html',
  styleUrls: ['./ayudaventas.component.scss']
})
export class AyudaventasComponent implements OnInit {

  public env = environment;

  constructor() { }

  ngOnInit() {
  }

}
