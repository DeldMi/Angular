import { BindingPageComponent } from './../pages/binding-page.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CustomUppercasePipe } from './pipe/custom-uppercase.pipe';
import { ClientService } from 'src/services/client.service';

@NgModule({
  declarations: [
    AppComponent,
    // ClientListPage,
    BindingPageComponent,
    CustomUppercasePipe
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
