import { Component } from '@angular/core';
import { BdserviceService } from '../services/bdservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginUser = {
    email: '',
    password: ''
  };
  constructor(private router: Router, private bdService: BdserviceService) {}
  login() {
    this.bdService.login(this.loginUser.email, this.loginUser.password)
      .then((loggedIn) => {
        if (loggedIn) {
          // Iniciar sesión exitosa, redirigir a la página principal
          this.router.navigate(['/home']);
        } else {
          // Credenciales inválidas, mostrar mensaje de error
          // Puedes usar una función de alerta o mostrar un mensaje en el template
          console.log('Credenciales inválidas');
        }
      })
      .catch(error => {
        // Error durante el proceso de inicio de sesión, mostrar mensaje de error
        // Puedes usar una función de alerta o mostrar un mensaje en el template
        console.log('Error de inicio de sesión:', error);
      });
  }
}