import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dataService:DataService) { }

  ngOnInit() {
  }

  goSolicitud(){
    window.location.href = 'https://apps.datacredito.com.co/raw/user-account/login/web/index';
  }

}
