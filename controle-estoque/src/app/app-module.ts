import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { PainelAdmin } from './componentes/painel-admin/painel-admin';
import { Dashboard } from './componentes/dashboard/dashboard';
import { Estoque } from './componentes/estoque/estoque';
import { Login } from './componentes/login/login';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormularioRegistro } from './componentes/formulario-registro/formulario-registro';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [App, PainelAdmin, Dashboard, Estoque, Login, FormularioRegistro],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatDividerModule,
    MatSelectModule
  ],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule { }
