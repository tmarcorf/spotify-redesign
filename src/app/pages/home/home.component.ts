import { Component, type OnInit } from '@angular/core';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { IMusica } from 'src/app/Interfaces/IMusica';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  musicas: IMusica[] = [];

  //Icone de play
  playIcone = faPlay;

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void { 
    this.obterMusicas();
  }

  async obterMusicas() {
    this.musicas = await this.spotifyService.buscarMusicas();
    console.log(this.musicas);
  }

  obterArtistas(musica: IMusica) {
    return musica.artistas.map(artista => artista.nome).join(', ');
  }

  async executarMusica(musica: IMusica) {
    await this.spotifyService.executarMusica(musica.id); 
  }
}
