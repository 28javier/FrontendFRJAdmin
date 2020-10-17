import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { PacienteComponent } from './pages/paciente/paciente.component';
import { LoginComponent } from './auth/login/login.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';


const routes:Routes = [

  {path: '',
   component: PagesComponent,
   children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'categoria', component: CategoriaComponent},
    {path: 'usuario', component: UsuarioComponent},
    {path: 'producto', component: ProductoComponent},
    {path: 'paciente', component: PacienteComponent},
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
   ]
  },
  {path: 'login', component: LoginComponent},
  {path: '**', component: NopagefoundComponent}
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
