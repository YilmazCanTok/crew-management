import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-crew-detail-dialog',
  templateUrl: './crew-detail-dialog.component.html',
  styleUrls: ['./crew-detail-dialog.component.css']
})
export class CrewDetailDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public translate: TranslateService) { }
}