import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WishlistModalPage } from './wishlist-modal.page';

describe('WishlistModalPage', () => {
  let component: WishlistModalPage;
  let fixture: ComponentFixture<WishlistModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishlistModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WishlistModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
