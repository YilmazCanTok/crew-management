import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Crew } from 'src/crew-list/crew.model';
import { CrewService } from 'src/services/crew.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-crew-edit-dialog',
  templateUrl: './crew-edit-dialog.component.html',
  styleUrls: ['./crew-edit-dialog.component.css']
})
export class CrewEditDialogComponent {
  crewForm: FormGroup;
  isEditMode: boolean;
  crewId?: number;

  constructor(
    private fb: FormBuilder,
    private crewService: CrewService,
    public dialogRef: MatDialogRef<CrewEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public translate: TranslateService
  ) {
    this.isEditMode = data.isEditMode;
    if (this.isEditMode) {
      this.crewId = data.crew.id;
    }
    this.crewForm = this.fb.group({
      id: [this.data.crew.id || 0],
      firstName: [this.data.crew?.firstName || '', Validators.required],
      lastName: [this.data.crew?.lastName || '', Validators.required],
      nationality: [this.data.crew?.nationality || ''],
      title: [this.data.crew?.title || ''],
      daysOnBoard: [this.data.crew?.daysOnBoard || '', Validators.required],
      dailyRate: [this.data.crew?.dailyRate || '', Validators.required],
      currency: [data.crew?.currency || 'USD'],
      discount: [this.data.crew?.discount || 0, Validators.min(0)],
      totalIncome: [this.data.crew?.totalIncome || '', Validators.required]
    });
  }

  ngOnInit(): void { 
    this.crewForm.valueChanges.subscribe(() => {
      this.updateTotalIncome();
    });
  }

  updateTotalIncome() {
    const daysOnBoard = this.crewForm.get('daysOnBoard')?.value || 0;
    const dailyRate = this.crewForm.get('dailyRate')?.value || 0;
    const discount = this.crewForm.get('discount')?.value || 0;

    const totalIncome = (daysOnBoard * dailyRate) - discount;
    this.crewForm.get('totalIncome')?.setValue(totalIncome, { emitEvent: false });
  }


  save(): void {
    if (this.crewForm.valid) {
      if (this.isEditMode) {
        this.crewService.updateCrew(this.crewForm.value)
        this.dialogRef.close(true);
      } else {
        this.crewService.createCrew(this.crewForm.value)
        this.dialogRef.close(true);

      }
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
