import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  // ? This is filler data. 
  // TODO: Replace with firebase...
  wishlist: Array<any> = [
    {
      title: 'BRED1',
      owner: 'INSERT UID HERE'
    },
    {
      title: 'BRED2',
      owner: 'INSERT UID HERE'
    },
    {
      title: 'BRED3',
      owner: 'INSERT UID HERE'
    },
  ];

  constructor() { }


  public add(event) {
    // TODO: add modal popup for adding wish
    console.log('Hey there...')
  }
}
