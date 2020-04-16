import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';



@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.scss']
})
export class PrintComponent implements OnInit {
  constructor(public dataService: DataService) { }

  ngOnInit() {
    registerLocaleData( es );
  }

}
