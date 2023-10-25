import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListPage } from 'src/pages/client-list-page-component';
import { Filho1Component } from 'src/pages/filho1-page.component';
import { Filho2Component } from 'src/pages/filho2-page.component';
import { PaiPageComponent } from 'src/pages/pai.component';

const routes: Routes = [
  { path: "client", component: ClientListPage },
  {
    path: "pai", component: PaiPageComponent,
    children: [
      { path: "filho1", component: Filho1Component },
      { path: "filho2", component: Filho2Component }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
