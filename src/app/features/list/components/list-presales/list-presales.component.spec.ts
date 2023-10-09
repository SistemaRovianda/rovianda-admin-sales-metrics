import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPresalesComponent } from './list-presales.component';

describe('ListPresalesComponent', () => {
  let component: ListPresalesComponent;
  let fixture: ComponentFixture<ListPresalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPresalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPresalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
