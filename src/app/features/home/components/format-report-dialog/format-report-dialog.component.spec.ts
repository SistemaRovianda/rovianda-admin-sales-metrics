import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatReportDialogComponent } from './format-report-dialog.component';

describe('FormatReportDialogComponent', () => {
  let component: FormatReportDialogComponent;
  let fixture: ComponentFixture<FormatReportDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormatReportDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatReportDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
