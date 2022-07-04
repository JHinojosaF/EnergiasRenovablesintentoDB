import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './aut/login/login.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { EnergiaEolicaComponent } from './energia-eolica/energia-eolica.component';
import { EnergiaGeotermicaComponent } from './energia-geotermica/energia-geotermica.component';
import { EnergiaHidraulicaComponent } from './energia-hidraulica/energia-hidraulica.component';
import { EnergiaSolarComponent } from './energia-solar/energia-solar.component';
import { MenuComponent } from './menu/menu.component';
import { OpinionComponent } from './opinion/opinion.component';

const routes: Routes = [
  {path:"", component:MenuComponent},
  {path: "solar", component:EnergiaSolarComponent},
  {path:"eolica", component:EnergiaEolicaComponent},
  {path:"geotermica",component:EnergiaGeotermicaComponent},
  {path:"hidraulica",component:EnergiaHidraulicaComponent},
  {path:"carrusel", component:CarruselComponent},
  {path:"opinion",component:OpinionComponent},
  {path:"login",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
