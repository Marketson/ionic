import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import 'firebase/firestore';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  listings: Observable<any[]>;

  constructor(firestore: AngularFirestore) {
    this.listings = firestore.collection('listing').valueChanges();
  }
}
