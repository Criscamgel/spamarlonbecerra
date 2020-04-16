import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment.prod';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(public router: Router) { }

  env: any = environment;
  itemsMenu: any = this.env.itemsMenu;

  ngOnInit() {}

}
