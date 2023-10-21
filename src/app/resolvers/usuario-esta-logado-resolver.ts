import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { SpotifyService } from "../services/spotify.service";

const naoAutenticado = (router: Router) => {
  localStorage.clear();
  router.navigateByUrl('/login');
  return false;
}

export const usuarioEstaLogadoResolver = () => new Promise(async (res) => {
  const spotifyService = inject(SpotifyService);
  const router = inject(Router);

  const token = localStorage.getItem('token');
  console.log(token);
  if (!token) {
    return naoAutenticado(router);
  }
  
  const usuarioCriado = await spotifyService.inicializarUsuario();
  if (usuarioCriado)
    res(true);
  else
    res(naoAutenticado(router));
  
  return false;
})