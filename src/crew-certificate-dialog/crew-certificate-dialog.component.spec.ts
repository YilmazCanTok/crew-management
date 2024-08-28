import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewCertificateDialogComponent } from './crew-certificate-dialog.component';

describe('CrewCertificateDialogComponent', () => {
  let component: CrewCertificateDialogComponent;
  let fixture: ComponentFixture<CrewCertificateDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrewCertificateDialogComponent]
    });
    fixture = TestBed.createComponent(CrewCertificateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
