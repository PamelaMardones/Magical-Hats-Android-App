import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { AlertController, Platform, ToastController } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { Usuario } from './usuario.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BdserviceService {

  public database!: SQLiteObject;

  tablaUsuario: string = "CREATE TABLE IF NOT EXISTS usuario(id_usuario INTEGER PRIMARY KEY autoincrement, mail VARCHAR(75) NOT NULL, contrasena VARCHAR(20) NOT NULL);";

  registroUsuario: string = "INSERT or IGNORE INTO usuario(id_usuario,mail,contrasena) VALUES (1,'pamela.mardones@gmail.com','#1234');";

  listaUsuario = new BehaviorSubject([]);
 
  private isDBReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
  
  constructor(private sqlite: SQLite, private platform: Platform, private toastController: ToastController, private alertController: AlertController, private router: Router) { 
    this.crearBD();
  }

  async presentToast(msj: string) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 2000,
      position: 'bottom'
    });

    await toast.present();
  }

  dbState() {
    return this.isDBReady.asObservable();
  }

  fetchUsuarios(): Observable<Usuario[]> {
    return this.listaUsuario.asObservable();
  }

  crearBD() {

    this.platform.ready().then(() => {

      this.sqlite.create({
        name: 'bdusuarios.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        this.database = db;
        this.crearTablas();
      }).catch(e => {
        this.presentToast("Error BD:" + e);
      })
    })
  }

  async crearTablas() {
    try {
      await this.database.executeSql(this.tablaUsuario, []);
      await this.database.executeSql(this.registroUsuario, []);
      this.buscarUsuarios();
      this.isDBReady.next(true);

    } catch (e) {
      this.presentToast("Error Tablas: " + e);
    }

  }

  buscarUsuarios() {
    return this.database.executeSql('SELECT * FROM usuario', []).then(res => {
      let items: Usuario[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            id_usuario: res.rows.item(i).id_usuario,
            mail: res.rows.item(i).mail,
            contrasena: res.rows.item(i).contrasena
          })
        }

      }
      this.listaUsuario.next(items as any);
    })
  }

  insertarUsuarios(mail: any, contrasena: any){
    let data = [mail,contrasena];
    return this.database.executeSql('INSERT INTO usuario(mail,contrasena) VALUES (?,?)',data).then(res=>{
      this.buscarUsuarios();
    });

  }


  async presentAlert(msj:string) {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: msj,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async login(email: string, password: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      const query = 'SELECT * FROM usuario WHERE mail = ? AND contrasena = ?';
      const params = [email, password];

      this.database.executeSql(query, params)
        .then(result => {
          if (result.rows.length > 0) {
            this.presentToast('Inicio de sesión exitoso');
            resolve(true); // Credenciales válidas
          } else {
            this.presentToast('Credenciales inválidas');
            resolve(false); // Credenciales inválidas
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  }
  canActivate(){
    this.router.navigate(['login'])
    return false;
  }
}
