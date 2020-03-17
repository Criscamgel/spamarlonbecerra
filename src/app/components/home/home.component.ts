import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { FormControl } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public env = environment;
  public convenio = new FormControl(false);

  constructor(public dataService: DataService) { }

  ngOnInit() {
  }

  convenioSet() {
    this.dataService.convenio = this.convenio.value;
  }

  goSolicitud() {
    window.location.href = this.env.urls.experian;
  }

  onPrint() {
      window.print();
  }

}
