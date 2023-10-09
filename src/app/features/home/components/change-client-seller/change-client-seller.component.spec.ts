import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeClientSellerComponent } from './change-client-seller.component';

describe('ChangeClientSellerComponent', () => {
  let component: ChangeClientSellerComponent;
  let fixture: ComponentFixture<ChangeClientSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeClientSellerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeClientSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
