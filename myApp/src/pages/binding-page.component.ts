import { Component } from "@angular/core";


@Component(
  {
    selector: 'app-binding',
    template: `
        <h1>Imgem Angular</h1>
        <img [src]="imagem" [style]="{width: width}"/>
        <div class="alert" [class]="{sucess: sucesso}" >Alerta!</div>
        <button (click)="enviarDados()">Enviar</button>

      `,
    styles: [`
      .alert{
        width: 200px;
        height: 100px;
        border: 1px solid blue;
      }
      .sucess {
        border: 5px solid green;
      }

      `]

  }
)


export class BindingPageComponent {

  width = "300px";
  imagem = "https://angular.io/assets/images/logos/angular/angular.svg";

  sucesso = true;

  enviarDados() {
    this.sucesso = !this.sucesso
  }
}
