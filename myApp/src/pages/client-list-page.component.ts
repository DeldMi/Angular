
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

  clients = [
    {
      id: 1,
      nome: '<NAME>',
      cpf: '123.456.789-00',
      email: '<EMAIL>',
      senha: '<PASSWORD>'
    },
    {
      id: 2,
      nome: '<NAME2>',
      cpf: '123.456.789-00',
      email: '<EMAIL2>',
      senha: '<PASSWORD2>'
    }
  ]


}
