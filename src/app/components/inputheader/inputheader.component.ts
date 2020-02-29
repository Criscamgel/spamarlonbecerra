import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { FormControl } from '@angular/forms';
import { RespuestaCalculadora } from 'src/app/models/respuesta-calculadora';

@Component({
  selector: 'app-inputheader',
  templateUrl: './inputheader.component.html',
  styleUrls: ['./inputheader.component.scss']
})
export class InputheaderComponent implements OnInit {

  public monto = new FormControl(0);
  public data: RespuestaCalculadora[] = [];

  constructor(private dataService: DataService) {
    this.nameChange();
  }

  ngOnInit() {
  }

  nameChange() {
    this.monto.valueChanges.subscribe(value => {
      this.dataService.calculateCuota(value)
      .then(data => {
        this.data = data;
        console.log(this.data);
      })
      .catch(console.error);
    });
  }

}
