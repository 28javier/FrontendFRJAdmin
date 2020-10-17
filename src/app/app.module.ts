import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// ruta principal ver
import { AppRoutingModule } from './app-routing.module';

// componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { PacienteComponent } from './pages/paciente/paciente.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeaderComponent } from './shared/header/header.component';
import { PagesComponent } from './pages/pages.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NopagefoundComponent,
    DashboardComponent,
    UsuarioComponent,
    ProductoComponent,
    CategoriaComponent,
    PacienteComponent,
    BreadcrumbsComponent,
    SidebarComponent,
    HeaderComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
