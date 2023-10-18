import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  constructor(private spotifyServive: SpotifyService) {}

  ngOnInit(): void { 
    this.verificarTokenUrlCallback();
  }

  verificarTokenUrlCallback() {
    const token = this.spotifyServive.obterTokenUrlCallback();

    if (!!token) {
      this.spotifyServive.definirAccessToken(token);
    }
  }

  abrirPaginaLogin() {
    window.location.href = this.spotifyServive.obterUrlLogin();
  }
}
