import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewEditDialogComponent } from './crew-edit-dialog.component';

describe('CrewEditDialogComponent', () => {
  let component: CrewEditDialogComponent;
  let fixture: ComponentFixture<CrewEditDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrewEditDialogComponent]
    });
    fixture = TestBed.createComponent(CrewEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
