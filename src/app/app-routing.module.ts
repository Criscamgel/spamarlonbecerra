import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AyudaventasComponent } from './components/ayudaventas/ayudaventas.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'ayuda', component: AyudaventasComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
