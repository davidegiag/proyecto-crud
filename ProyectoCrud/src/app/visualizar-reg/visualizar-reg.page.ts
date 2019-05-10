import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-visualizar-reg',
  templateUrl: './visualizar-reg.page.html',
  styleUrls: ['./visualizar-reg.page.scss'],
})
export class VisualizarRegPage implements OnInit {
  varProductos;

  constructor(public modalController: ModalController, public navParams: NavParams) {
    this.varProductos = this.navParams.get('mod');
   }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss();
  }

}
