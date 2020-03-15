import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import 'firebase/firestore';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  listings: Observable<any[]>;

  constructor(firestore: AngularFirestore) {
    this.listings = firestore.collection('listing').valueChanges();
  }
}
