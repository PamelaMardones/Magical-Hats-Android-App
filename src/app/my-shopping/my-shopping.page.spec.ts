import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyShoppingPage } from './my-shopping.page';

describe('MyShoppingPage', () => {
  let component: MyShoppingPage;
  let fixture: ComponentFixture<MyShoppingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MyShoppingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
