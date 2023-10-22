import { Component, OnInit } from '@angular/core';
import { faGuitar, faHome, faMusic, faSearch } from '@fortawesome/free-solid-svg-icons';
import { IPlaylist } from 'src/app/Interfaces/IPlaylist';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-painel-esquerdo',
  templateUrl: './painel-esquerdo.component.html',
  styleUrls: ['./painel-esquerdo.component.scss']
})
export class PainelEsquerdoComponent implements OnInit{
  
  public menuSelecionado = 'Home';

  public playlists: IPlaylist[] = [];

  // Icones
  public homeIcone = faHome;
  public pesquisarIcone = faSearch;
  public artistaIcone = faGuitar;
  public playlistIcone = faMusic;

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.buscarPlaylists();
  }

  botaoClick(botao: string) {
    this.menuSelecionado = botao;
  }

  async buscarPlaylists() {
    this.playlists = await this.spotifyService.buscarPlaylistUsuario();
    console.log(this.playlists);
  }
}
