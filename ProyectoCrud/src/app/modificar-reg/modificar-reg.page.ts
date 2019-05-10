import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, LoadingController } from '@ionic/angular';
import { FirebaseService, Producto } from '../Services/firebase.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modificar-reg',
  templateUrl: './modificar-reg.page.html',
  styleUrls: ['./modificar-reg.page.scss'],
})
export class ModificarRegPage implements OnInit {
  NombreProducto: string;
  Marca: string;
  Cantidad: number;
  productoId = null;
  loading;
  varProducto;

  constructor(public modalController: ModalController, public navParams: NavParams,
              private firebaseService: FirebaseService, public loadingController: LoadingController
              ) {
    this.varProducto = this.navParams.get('mod');
    this.NombreProducto = this.varProducto.NombreProducto;
    this.Marca = this.varProducto.Marca;
    this.Cantidad = this.varProducto.Cantidad;
  }

  ngOnInit() {
    // this.productoId = this.route.snapshot.params['id'];
    // if (this.productoId)  {
    //   this.presentLoading();
    // }
  }

  dismiss() {
    this.modalController.dismiss();
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Cargando...',
    });
    await this.loading.present();
  }


  ModificarProducto() {
    this.presentLoading();
    let producto = {
      Cantidad: +this.Cantidad,
      Marca: this.Marca,
      NombreProducto: this.NombreProducto
    };
    this.firebaseService.updateProducto(producto, this.varProducto.id).then(() => {
      this.loading.dismiss();
      this.dismiss();
    }).catch(error => {
      console.log(error);
    });
  }

}
