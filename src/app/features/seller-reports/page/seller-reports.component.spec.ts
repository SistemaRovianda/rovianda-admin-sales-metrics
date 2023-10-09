import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerReportsComponent } from './seller-reports.component';

describe('SellerReportsComponent', () => {
  let component: SellerReportsComponent;
  let fixture: ComponentFixture<SellerReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
