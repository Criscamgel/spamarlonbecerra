import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { Constants } from 'src/app/models/constants';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-inputheader',
  templateUrl: './inputheader.component.html',
  styleUrls: ['./inputheader.component.scss']
})
export class InputheaderComponent implements OnInit {

  public monto = new FormControl(0);
  public montoMaximo = Constants.montoMaximo;
  public montoMinimo = Constants.montoMinimo;

  constructor(public dataService: DataService) {
  }

  ngOnInit() {
    registerLocaleData( es );
    this.montoChange();
  }

  montoChange() {
    this.monto.valueChanges.subscribe(value => {
      if ((value < this.montoMinimo) || (value > this.montoMaximo) ) {
        this.dataService.setMonto(0);
      } else {
        this.dataService.setMonto(value);
      }
    });
  }

}
