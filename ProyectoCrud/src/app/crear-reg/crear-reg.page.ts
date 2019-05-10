import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FirebaseService } from '../Services/firebase.service';
import { LoadingController } from '@ionic/angular';



@Component({
  selector: 'app-crear-reg',
  templateUrl: './crear-reg.page.html',
  styleUrls: ['./crear-reg.page.scss'],
})


export class CrearRegPage implements OnInit {

  NombreProducto: string;
  Marca: string;
  Cantidad: number;
  loading;


  constructor(public modalController: ModalController, private firebaseService: FirebaseService,
              public loadingController: LoadingController) {
  }

  ngOnInit() {
  }


  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Cargando...',
    });
    await this.loading.present();
  }

  dismiss() {
    this.modalController.dismiss();
  }

  CrearProducto() {
    let producto = {
      Cantidad: +this.Cantidad,
      Marca: this.Marca,
      NombreProducto: this.NombreProducto
    };
    this.presentLoading();
    this.firebaseService.addProducto(producto).then(() => {
      this.loading.dismiss();
      this.dismiss();
    }).catch(error => {
      console.log(error);
    });
  }
}
