import { Component, OnInit } from '@angular/core';
import { Iteminfo } from 'src/app/models/itemayuda';
import { AyudaVentasService } from 'src/app/services/ayuda-ventas.service';

@Component({
  selector: 'app-tipsventas',
  templateUrl: './tipsventas.component.html',
  styleUrls: ['./tipsventas.component.scss']
})
export class TipsventasComponent implements OnInit {

  public itemsVentas: Iteminfo[];

  constructor(private ayudaventasService: AyudaVentasService) { }

  ngOnInit() {
    this.itemsVentas = this.ayudaventasService.tipsVentas;
  }

}
