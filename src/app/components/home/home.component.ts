import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { FormControl } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { CuotasService } from 'src/app/services/cuotas.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public env = environment;
  public convenio = new FormControl(false);

  constructor(public dataService: DataService, public cuotaService: CuotasService) { }

  ngOnInit() {
    this.initializer();
  }

  initializer() {
    this.cuotaService.getCuotas();
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
