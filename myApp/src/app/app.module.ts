import { BindingPageComponent } from './../pages/binding-page.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CustomUppercasePipe } from './pipe/custom-uppercase.pipe';
import { ClientService } from 'src/services/client.service';
import { Filho1Component } from 'src/pages/filho1-page.component';
import { Filho2Component } from 'src/pages/filho2-page.component';
import { PaiPageComponent } from 'src/pages/pai.component';
import { ClientListPage } from 'src/pages/client-list-page.component';
import { LoginComponent } from 'src/pages/login-page.component';
import { ClienteDatalhePageComponet } from 'src/pages/cliente-datalhe-page.componet';

@NgModule({
  declarations: [
    AppComponent,
    ClientListPage,
    BindingPageComponent,
    CustomUppercasePipe,
    PaiPageComponent,
    Filho1Component,
    Filho2Component,
    ClientListPage,
    LoginComponent,
    ClienteDatalhePageComponet

  ],
  imports: [
    BrowserModule,
    // ComponentModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
