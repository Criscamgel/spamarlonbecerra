import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment.prod';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public env = environment;

  constructor() { }

  ngOnInit() {
  }

  goSolicitud() {
    window.location.href = this.env.urls.experian;
  }

  onPrint() {
      window.print();
  }

}
