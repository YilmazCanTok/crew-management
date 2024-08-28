import { Component, Inject } from '@angular/core';
import { Certificate } from './certificate.model';
import { TranslateService } from '@ngx-translate/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-crew-certificate-dialog',
  templateUrl: './crew-certificate-dialog.component.html',
  styleUrls: ['./crew-certificate-dialog.component.css']
})
export class CrewCertificateDialogComponent {
  certificateList: Certificate[] = [];
  displayedColumns: string[] = ['name', 'link'];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public translate: TranslateService) {
    this.certificateList = data
  }

}
