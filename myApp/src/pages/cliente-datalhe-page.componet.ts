import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: "app-client-detalhe",
  template: `
    <h1>Detalhe do cliente <span>ID: {{client.id}}</span></h1>
    <p>{{client.nome}}</p>
    <p>{{client.descricao}}</p>
  `
})

export class ClienteDatalhePageComponet implements OnInit{
  client = {id: "0", nome: "", descricao: ""}

  constructor(private activeRouter: ActivatedRoute /*,clientServece*/){

  }

  ngOnInit(): void {
    const id = this.activeRouter.snapshot.paramMap.get("id");
    if(id){
      this.client = {id:id, nome:"Cliente 1", descricao:" descricao do cliente 1"}
    }
  }


}
