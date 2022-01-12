import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingProductsComponent } from './ranking-products.component';

describe('RankingProductsComponent', () => {
  let component: RankingProductsComponent;
  let fixture: ComponentFixture<RankingProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RankingProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
