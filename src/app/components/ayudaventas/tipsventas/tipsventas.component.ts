import { Component, OnInit } from '@angular/core';
import { Iteminfo } from 'src/app/models/itemayuda';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-tipsventas',
  templateUrl: './tipsventas.component.html',
  styleUrls: ['./tipsventas.component.scss']
})
export class TipsventasComponent implements OnInit {

  public itemsVentas: Iteminfo[] = environment.tipsVentas;

  constructor() { }

  ngOnInit() {
  }

}
