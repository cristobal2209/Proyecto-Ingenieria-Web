import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { GuiaComponent } from './guia/guia.component';
import { ForoComponent } from './foro/foro.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GaleriaComponent } from './galeria/galeria.component';
import { NuevaPublicacionForoComponent } from './nueva-publicacion-foro/nueva-publicacion-foro.component';
import { NuevaPublicacionGaleriaComponent } from './nueva-publicacion-galeria/nueva-publicacion-galeria.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    GuiaComponent,
    ForoComponent,
    LoginComponent,
    RegistroComponent,
    GaleriaComponent,
    NuevaPublicacionForoComponent,
    NuevaPublicacionGaleriaComponent,
    PerfilUsuarioComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
