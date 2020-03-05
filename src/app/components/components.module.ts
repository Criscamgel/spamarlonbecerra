import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';
import { InputheaderComponent } from './inputheader/inputheader.component';
import { MaterialModule } from '../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { RadiogroupComponent } from './radiogroup/radiogroup.component';
import { ResumecalculatorComponent } from './resumecalculator/resumecalculator.component';
import { PrintComponent } from './print/print.component';

import { CurrencyMaskModule } from "ng2-currency-mask";
import { ReactiveFormsModule } from '@angular/forms';


const ComponentModule = [
  HomeComponent,
  NavbarComponent,
  MenuComponent,
  InputheaderComponent,
  CalculadoraComponent,
  RadiogroupComponent,
  ResumecalculatorComponent,
  PrintComponent
];



@NgModule({
  declarations: [ComponentModule],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MaterialModule,
    BrowserModule,
    CurrencyMaskModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
