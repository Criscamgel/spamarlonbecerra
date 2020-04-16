import { Component, OnInit } from '@angular/core';
import { Iteminfo } from 'src/app/models/itemayuda';
import { AyudaVentasService } from 'src/app/services/ayuda-ventas.service';

@Component({
  selector: 'app-itemsconimagenes',
  templateUrl: './itemsconimagenes.component.html',
  styleUrls: ['./itemsconimagenes.component.scss']
})
export class ItemsconimagenesComponent implements OnInit {

  public itemsAyuda: Iteminfo[];

  constructor(private ayudaventasService: AyudaVentasService) { }

  ngOnInit() {
    this.itemsAyuda = this.ayudaventasService.itemsAyuda;
  }

}
