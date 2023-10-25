import { Component } from "@angular/core";


@Component(
  {
    selector: "app-pai",
    template: `
      <h1>No Component Pai</h1>
      <a [routerLink]="['filho1']">Ir Filho 1</a><BR>
      <a [routerLink]="['filho2']">Ir Filho 2</a><BR>
      <!-- <route-outlet></route-outlet> -->
    `
  }
)

export class PaiPageComponent {

}
