import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnergiaEolicaComponent } from './energia-eolica/energia-eolica.component';
import { EnergiaSolarComponent } from './energia-solar/energia-solar.component';
import { EnergiaHidraulicaComponent } from './energia-hidraulica/energia-hidraulica.component';
import { EnergiaGeotermicaComponent } from './energia-geotermica/energia-geotermica.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarruselComponent } from './carrusel/carrusel.component';
import { OpinionComponent } from './opinion/opinion.component';
import { AutModule } from './aut/aut.module';

@NgModule({
  declarations: [
    AppComponent,
    EnergiaEolicaComponent,
    EnergiaSolarComponent,
    EnergiaHidraulicaComponent,
    EnergiaGeotermicaComponent,
    MenuComponent,
    FooterComponent,
    CarruselComponent,
    OpinionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
