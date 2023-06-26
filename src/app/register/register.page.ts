import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BdserviceService } from '../services/bdservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit{
    mail = "";
    contrasena = "";
  
    constructor(public router:Router, private db: BdserviceService) { }
  
    ngOnInit() {
    }
  
    insertar(){
      this.db.insertarUsuarios(this.mail,this.contrasena);
      this.db.presentToast("Usuario registrado");
      this.router.navigate(['/login']);
    }
  
  }
  