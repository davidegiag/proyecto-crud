import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CrearRegPage } from '../crear-reg/crear-reg.page';
import { ModificarRegPage } from '../modificar-reg/modificar-reg.page';
import { VisualizarRegPage } from '../visualizar-reg/visualizar-reg.page';
import { FirebaseService } from '../Services/firebase.service';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private Productos;
  loading;


  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor(public loadingController: LoadingController, private modalCtrl: ModalController,
              private firebaseService: FirebaseService, public alertController: AlertController) {
    this.presentLoading();
    this.firebaseService.getProductos().subscribe(actions => {
      this.Productos = [];
      this.loading.dismiss();
      actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        this.Productos.push({ id, ...data });
      });
    });
  }

  async presentAlert(id) {
    const alert = await this.alertController.create({
      message: '¿Estás seguro de que quieres eliminar este producto?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Cancelado');
          }
        }, {
          text: 'Borrar',
          handler: () => {
            this.presentLoading();
            this.firebaseService.removeProducto(id).then(() => {
              this.loading.dismiss();
            }).catch(error => {
              console.log(error);
            });
          }
        }
      ]
    });

    await alert.present();
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Cargando...',
    });
    await this.loading.present();
  }

  async CrearNuevo() {
    const modal = await this.modalCtrl.create({
      component: CrearRegPage
    });


    return await modal.present();
  }

  async Modificar(P) {
    const modificar = await this.modalCtrl.create({
      component: ModificarRegPage,
      componentProps: { mod: P }
    });

    return await modificar.present();
  }

  async Visualizar(P) {
    const visualizar = await this.modalCtrl.create({
      component: VisualizarRegPage,
      componentProps: { mod: P }
    });

    return await visualizar.present();
  }

  Eliminar(P) {
    this.presentAlert(P.id);
  }

  ngOnInit() {
  }
}
