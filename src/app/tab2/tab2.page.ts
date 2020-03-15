import { Component } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { WishlistModalPage } from '../wishlist-modal/wishlist-modal.page';

import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import 'firebase/firestore';
import { firestore } from 'firebase';

// ? filter (add to wishlist query after auth is done.)
// , ref => ref.where('owner', '==', 'large')

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  wishlist: Observable<any[]>;

  constructor(private firestore: AngularFirestore, public modalCtrl: ModalController) {
    this.wishlist = firestore.collection('wishlists').valueChanges({ idField: 'propertyId' });
  }

  // CRUD
  async add(event) {
    const modal = await this.modalCtrl.create({
      component: WishlistModalPage,
    });
    modal.onDidDismiss().then((data) => {
      this.firestore.collection('wishlists').add({
        title: data.data.name,
        category: data.data.category
      })
    });

    return await modal.present();
  }

  public delete(id) {
    this.firestore.collection('wishlists').doc(id).delete()
  }
}