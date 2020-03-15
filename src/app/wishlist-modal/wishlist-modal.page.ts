import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ActionSheet, ActionSheetOptions } from '@ionic-native/action-sheet/ngx';


@Component({
  selector: 'app-wishlist-modal',
  templateUrl: './wishlist-modal.page.html',
  styleUrls: ['./wishlist-modal.page.scss'],
})
export class WishlistModalPage implements OnInit {

  constructor(
    private modalController: ModalController,
  ) { }

  // Get input data
  name = ''
  category = ''

  getName(value: string) {
    this.name = value
  }

  getCategory(value: string) {
    console.log(value)
    this.category = value
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  add() {
    let input = { 'name': this.name, 'category': this.category }
    this.modalController.dismiss(input);
  }

  ngOnInit() {
  }

}
