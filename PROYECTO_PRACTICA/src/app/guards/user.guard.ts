import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {EquipoService} from '../service/equipo.service';
import { AutenticacionService } from '../autenticacion/autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private router: Router, private sesion: EquipoService, private autenticacion: AutenticacionService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkUserLogin();
  }

  checkUserLogin(): boolean{
    if(this.sesion.getsesion() && this.sesion.tipo == 'tip02' && this.autenticacion.ingresar2 == true){
      alert(this.sesion.getsesion());
      return true;
    }
      return false;
  }

}
