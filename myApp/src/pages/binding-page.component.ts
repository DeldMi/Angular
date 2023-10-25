import { Component } from "@angular/core";


@Component(
  {
    selector: 'app-binding',
    template: `
        <h1>Imgem Angular</h1>

        <img [src]="imagem" [style.width.px]=" width"/>
        <br>
        <img [src]="imagem" [style]="{width: width2, height: height2}"/>

        <div
          class="alert"
          [class]="{sucess: sucesso}"
          [style.background-color]="backgroundColor"
          >Alerta!</div>

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

  width = 150;

  width2 = "50px";
  height2= "50px";

  imagem = "https://angular.io/assets/images/logos/angular/angular.svg";

  backgroundColor = "rgba(255,25,255)"

  sucesso = true;

  enviarDados() {
    this.sucesso = !this.sucesso
    this.backgroundColor = this.sucesso? "rgba(255,25,255)" : "rgba(255,252,25)"

  }
}
