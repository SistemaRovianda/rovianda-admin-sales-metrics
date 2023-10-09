import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerRouteComponent } from './seller-route.component';

describe('SellerRouteComponent', () => {
  let component: SellerRouteComponent;
  let fixture: ComponentFixture<SellerRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
