import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartPage } from './cart.page';
import { CommonModule } from '@angular/common';

describe('CartPage', () => {
  let component: CartPage;
  let fixture: ComponentFixture<CartPage>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [CommonModule],
    });
    fixture = TestBed.createComponent(CartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
