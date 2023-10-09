import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSalesPresalesComponent } from './list-sales-presales.component';

describe('ListSalesPresalesComponent', () => {
  let component: ListSalesPresalesComponent;
  let fixture: ComponentFixture<ListSalesPresalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSalesPresalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSalesPresalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
