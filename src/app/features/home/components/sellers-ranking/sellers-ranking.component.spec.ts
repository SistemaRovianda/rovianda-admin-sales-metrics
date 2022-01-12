import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellersRankingComponent } from './sellers-ranking.component';

describe('SellersRankingComponent', () => {
  let component: SellersRankingComponent;
  let fixture: ComponentFixture<SellersRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellersRankingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellersRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
