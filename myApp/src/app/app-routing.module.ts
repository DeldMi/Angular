import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListPage } from 'src/pages/client-list-page.component';
import { Filho1Component } from 'src/pages/filho1-page.component';
import { Filho2Component } from 'src/pages/filho2-page.component';
import { PaiPageComponent } from 'src/pages/pai.component';
import { UserGuard } from './guards/user.guard';
import { LoginComponent } from 'src/pages/login-page.component';
import { ClienteDatalhePageComponet } from 'src/pages/cliente-datalhe-page.componet';

const routes: Routes = [
  {
    path: "client",
    component: ClientListPage,
    canActivate: [UserGuard]
  },
  {
    path: "pai", component: PaiPageComponent,
    children: [
      { path: "filho1", component: Filho1Component },
      { path: "filho2", component: Filho2Component }
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: 'client/detalhe/:id', component: ClienteDatalhePageComponet}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


