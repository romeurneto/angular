import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Foto } from '../foto/foto';
import { FotoService } from '../services/foto.service';

@Component({
  selector: 'caelumpic-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  title = 'Angular';
  listaFotos: Foto[] = [];
  constructor(private fotoService: FotoService) {
    this.fotoService.listar().subscribe(
      fotosApi => this.listaFotos = fotosApi
    )

    /*     conexaoApi.get('http://localhost:3000/v1/fotos')
                  .subscribe(
                    fotosApi => this.listaFotos = fotosApi
                    , erro => erro
                    ); */
  }

  deletar(fotoApagada: Foto) {
    console.log('Apagou');
    this.fotoService.deletar(fotoApagada)
      .subscribe(
        () => {
          console.log('foto apagada com sucesso')
          this.listaFotos = this.listaFotos.filter(foto => foto != fotoApagada)
        }
        , erro => console.log(erro)

      );
  }

  ngOnInit() {
  }

}
