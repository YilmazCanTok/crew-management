import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewDetailDialogComponent } from './crew-detail-dialog.component';

describe('CrewDetailDialogComponent', () => {
  let component: CrewDetailDialogComponent;
  let fixture: ComponentFixture<CrewDetailDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrewDetailDialogComponent]
    });
    fixture = TestBed.createComponent(CrewDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
