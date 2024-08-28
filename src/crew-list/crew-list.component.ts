import { Component, ViewChild } from '@angular/core';
import { CrewService } from '../services/crew.service';
import { Crew } from './crew.model';
import { TranslateService } from '@ngx-translate/core';
import { CrewDetailDialogComponent } from 'src/crew-detail-dialog/crew-detail-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { CrewEditDialogComponent } from 'src/crew-edit-dialog/crew-edit-dialog.component';
import { MatTable } from '@angular/material/table';
import { CrewCertificateDialogComponent } from 'src/crew-certificate-dialog/crew-certificate-dialog.component';
import { CertificateService } from 'src/services/certificate.service';

@Component({
  selector: 'app-crew-list',
  templateUrl: './crew-list.component.html',
  styleUrls: ['./crew-list.component.css']
})
export class CrewListComponent {
  @ViewChild(MatTable) table!: MatTable<any>;
  crewList: Crew[] = [];
  displayedColumns: string[] = ['firstName', 'lastName', 'nationality', 'title', 'daysOnBoard', 'dailyRate', 'currency', 'discount', 'totalIncome', 'actions', 'certificate'];

  ngOnInit() {
    this.loadCrewList();
    if (!this.translate.currentLang) {
      this.translate.setDefaultLang('en');
      this.translate.use('en');
    }
  }

  constructor(private crewService: CrewService, public translate: TranslateService, private dialog: MatDialog, private certificateService: CertificateService) {
    this.loadCrewList();
    translate.addLangs(['en', 'fr', 'pt']);
    translate.setDefaultLang('en');
  }

  switchLang(lang: string) {
    this.translate.use(lang);
    this.translate.setDefaultLang(lang);
  }

  deleteCrew(id: number) {
    const confirmationMessage = this.translate.instant('DELETE_CONFIRMATION');
    if (confirm(confirmationMessage)) {
      this.crewService.deleteCrew(id)
    }
  }

  openCrewDetail(row: any): void {
    this.dialog.open(CrewDetailDialogComponent, {
      width: '400px',
      data: row
    });
  }


  loadCrewList() {
    this.crewService.getCrew().subscribe((data) => {
      this.crewList = data;
    });
    if (this.table) {
      this.table.renderRows();
    }
  }

  openEditPopup(row: any = undefined): void {
    const dialogRef = this.dialog.open(CrewEditDialogComponent, {
      data: { crew: row || {}, isEditMode: !!row }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadCrewList();
      }
    });
  }

  openCertificatePopup(userId: number): void {
    const certificatesByUserId = this.certificateService.getCertificatesByUserId(userId)
    this.dialog.open(CrewCertificateDialogComponent, {
      width: '800px',
      data: certificatesByUserId
    });
  }
}