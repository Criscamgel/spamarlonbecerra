import { Component, OnInit } from '@angular/core';
import { Iteminfo } from 'src/app/models/itemayuda';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-itemsconimagenes',
  templateUrl: './itemsconimagenes.component.html',
  styleUrls: ['./itemsconimagenes.component.scss']
})
export class ItemsconimagenesComponent implements OnInit {

  public itemsAyuda: Iteminfo[] = environment.itemsAyuda;

  constructor() { }

  ngOnInit() {
  }

}
