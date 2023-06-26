import { Component } from '@angular/core';
import { BdserviceService } from '../services/bdservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private bdService: BdserviceService) {}
  login() {
    this.bdService.login(this.email, this.password)
      .then(success => {
        if (success) {
          console.log('Inicio de sesión exitoso');
        } else {
          console.log('Credenciales inválidas');
        }
      })
      .catch(error => {
        console.error('Error al iniciar sesión:', error);
      });
  }
}