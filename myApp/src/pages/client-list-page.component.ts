
import { Component } from "@angular/core";

@Component(
  {
    selector: "app-clientList",
    templateUrl: './client-list-page.component.html',
  }
)

export class ClientListPage{

  clientePremium = true

  itema = ['teste']
  teste = 'teste'

  clients = ['Clients 1', 'Clients 2']


}
