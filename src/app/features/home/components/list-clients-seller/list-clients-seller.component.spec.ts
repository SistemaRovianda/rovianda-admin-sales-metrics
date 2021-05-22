import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListClientsSellerComponent } from './list-clients-seller.component';

describe('ListClientsSellerComponent', () => {
  let component: ListClientsSellerComponent;
  let fixture: ComponentFixture<ListClientsSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListClientsSellerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListClientsSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
