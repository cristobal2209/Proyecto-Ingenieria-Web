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
import { SignupComponent } from './signup/signup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GaleriaComponent } from './galeria/galeria.component';
import { NuevaPublicacionForoComponent } from './nueva-publicacion-foro/nueva-publicacion-foro.component';
import { NuevaPublicacionGaleriaComponent } from './nueva-publicacion-galeria/nueva-publicacion-galeria.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { JsonReaderComponent } from './json-reader/json-reader.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    GuiaComponent,
    ForoComponent,
    LoginComponent,
    SignupComponent,
    GaleriaComponent,
    NuevaPublicacionForoComponent,
    NuevaPublicacionGaleriaComponent,
    PerfilUsuarioComponent,
    SignupFormComponent,
    LoginFormComponent,
    JsonReaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
