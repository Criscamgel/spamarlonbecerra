import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';


@Component({
  selector: 'app-resumecalculator',
  templateUrl: './resumecalculator.component.html',
  styleUrls: ['./resumecalculator.component.scss']
})
export class ResumecalculatorComponent implements OnInit {

  constructor(public dataService: DataService) {  }

  ngOnInit() {
    registerLocaleData( es );
  }

}
