import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Producto {
  NombreProducto: string;
  Marca: string;
  Cantidad: number;
}

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private productosCollection: AngularFirestoreCollection<Producto>;
  private productos: Observable<Producto[]>;
  constructor(public firebaseService: AngularFirestore) {
    this.productosCollection = firebaseService.collection<Producto>('Productos');
  }
  

  getProductos() {
    return this.productosCollection.snapshotChanges();
  }

  getProducto(id) {
    return this.productosCollection.doc<Producto>(id).valueChanges();
  }

  updateProducto(producto: Producto, id: string) {
    return this.productosCollection.doc(id).update(producto);
  }

  addProducto(producto: Producto) {
    return this.productosCollection.add(producto);
  }

  removeProducto(id) {
    return this.productosCollection.doc(id).delete();
  }
}
