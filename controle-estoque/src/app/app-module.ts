import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { PainelAdmin } from './componentes/painel-admin/painel-admin';
import { Dashboard } from './componentes/dashboard/dashboard';
import { Estoque } from './componentes/estoque/estoque';
import { Login } from './componentes/login/login';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioRegistro } from './componentes/formulario-registro/formulario-registro';

@NgModule({
  declarations: [App, PainelAdmin, Dashboard, Estoque, Login, FormularioRegistro],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule { }
