import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { environment } from '../../../../environments/environment.prod';

@Component({
  selector: 'app-descuento',
  templateUrl: './descuento.component.html',
  styleUrls: ['./descuento.component.scss']
})
export class DescuentoComponent implements OnInit {
  public env = environment;
  public descuento = new FormControl(0);

  constructor(public dataService: DataService) { }

  ngOnInit() {
  }

}
