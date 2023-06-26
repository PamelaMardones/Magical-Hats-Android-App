import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BdserviceService } from '../services/bdservice.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
    mail = "";
    contrasena = "";
  
    constructor(public router:Router, private bdService: BdserviceService, private alertController: AlertController) { }
  
    async presentAlert(msj: string) {
      const alert = await this.alertController.create({
        header: 'Registro Exitoso',
        message: msj,
        buttons: ['OK']
      });
  
      await alert.present();
    }
  
    insertar() {
      this.bdService.insertarUsuarios(this.mail, this.contrasena)
        .then(() => {
          this.presentAlert('¡Registro exitoso!');
          // Puedes redirigir a otra página aquí si es necesario
        })
        .catch(error => {
          console.log('Error en el registro:', error);
          // Mostrar mensaje de error en caso de que falle el registro
        });
    }
  }