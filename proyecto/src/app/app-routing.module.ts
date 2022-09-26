import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForoComponent } from './foro/foro.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { GuiaComponent } from './guia/guia.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { NuevaPublicacionForoComponent } from './nueva-publicacion-foro/nueva-publicacion-foro.component';
import { NuevaPublicacionGaleriaComponent } from './nueva-publicacion-galeria/nueva-publicacion-galeria.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'guia',
    component: GuiaComponent
  },
  {
    path: 'foro',
    component: ForoComponent
  },
  {
    path: 'galeria',
    component: GaleriaComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'nueva-publicacion-foro',
    component: NuevaPublicacionForoComponent
  },
  {
    path: 'nueva-publicacion-galeria',
    component: NuevaPublicacionGaleriaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
