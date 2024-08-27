import { Component } from '@angular/core';
import { CrewService } from './crew.service';
import { Crew } from './crew.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-crew-list',
  templateUrl: './crew-list.component.html',
  styleUrls: ['./crew-list.component.css']
})
export class CrewListComponent {
  crewList: Crew[] = [
    { firstName: 'John', lastName: 'Doe', nationality: 'USA', title: 'Captain', daysOnBoard: 120, dailyRate: 100, currency: 'USD', totalIncome: 12000 },
    { firstName: 'Jane', lastName: 'Smith', nationality: 'UK', title: 'Engineer', daysOnBoard: 90, dailyRate: 90, currency: 'EUR', totalIncome: 8100 },
  ];
  displayedColumns: string[] = ['firstName', 'lastName', 'nationality', 'title', 'daysOnBoard', 'dailyRate', 'currency', 'totalIncome'];


  constructor(private crewService: CrewService, public translate: TranslateService) {
    this.crewList = this.crewService.getCrew();
    translate.addLangs(['en', 'fr', 'pt']);
    translate.setDefaultLang('en');
  }

  switchLang(lang: string) {
    console.log(lang)
    this.translate.use(lang);
    this.translate.setDefaultLang(lang);
  }

  deleteCrew(index: number) {
    this.crewList.splice(index, 1);
  }

  openEditPopup() {
  }
}
