
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';

  descricao1 = "Descricao"

  clientePremium = false;

  nome = "Andre Felipe"

  valores = [
    {
      descricao: "descrição 1",
      nome: "Nome 1",
      id: 1
    },
    {
      descricao: "descrição 2",
      nome: "Nome 2",
      id: 2
    }
  ]

  umadata = new Date();
  umamoeda = 10.5

  adicionar(){
    this.valores.push({
      descricao: this.descricao1,
      nome: this.nome,
      id: this.valores.length + 1
    })
  }
}
