import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { MenuComponent } from './shared/menu/menu.component';
import { InputheaderComponent } from './shared/inputheader/inputheader.component';
import { MaterialModule } from '../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CalculadoraComponent } from './home/calculadora/calculadora.component';
import { RadiogroupComponent } from './home/radiogroup/radiogroup.component';
import { ResumecalculatorComponent } from './home/resumecalculator/resumecalculator.component';
import { PrintComponent } from './home/print/print.component';

import { CurrencyMaskModule } from "ng2-currency-mask";
import { ReactiveFormsModule } from '@angular/forms';
import { AyudaventasComponent } from './ayudaventas/ayudaventas.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ItemsconimagenesComponent } from './ayudaventas/itemsconimagenes/itemsconimagenes.component';
import { ItemparrafoComponent } from './ayudaventas/itemparrafo/itemparrafo.component';
import { RouterModule } from '@angular/router';
import { TipsventasComponent } from './ayudaventas/tipsventas/tipsventas.component';
import { ContactoComponent } from './ayudaventas/contacto/contacto.component';
import { DescuentoComponent } from './home/descuento/descuento.component';


const ComponentModule = [
  HomeComponent,
  AyudaventasComponent,
  NavbarComponent,
  MenuComponent,
  InputheaderComponent,
  CalculadoraComponent,
  RadiogroupComponent,
  ResumecalculatorComponent,
  PrintComponent,
  FooterComponent,
  ItemsconimagenesComponent,
  ItemparrafoComponent,
  TipsventasComponent,
  ContactoComponent
];



@NgModule({
  declarations: [ComponentModule, DescuentoComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MaterialModule,
    BrowserModule,
    CurrencyMaskModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    ComponentModule
  ]
})
export class ComponentsModule { }
