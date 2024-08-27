import { Injectable } from '@angular/core';
import { Crew } from './crew.model';

@Injectable({
  providedIn: 'root'
})
export class CrewService {

  constructor() { }

  getCrew(): Crew[] {
    return [
      { firstName: 'John', lastName: 'Doe', nationality: 'USA', title: 'Captain', daysOnBoard: 120, dailyRate: 200, currency: 'USD', totalIncome: 24000 },
      { firstName: 'Jane', lastName: 'Smith', nationality: 'UK', title: 'Engineer', daysOnBoard: 90, dailyRate: 180, currency: 'USD', totalIncome: 16200 },
      { firstName: 'Carlos', lastName: 'Garcia', nationality: 'Spain', title: 'Cook', daysOnBoard: 100, dailyRate: 150, currency: 'EUR', totalIncome: 15000 },
      { firstName: 'Anna', lastName: 'Davis', nationality: 'France', title: 'Mechanic', daysOnBoard: 85, dailyRate: 175, currency: 'EUR', totalIncome: 14875 },
      { firstName: 'Luis', lastName: 'Mendes', nationality: 'Portugal', title: 'Technician', daysOnBoard: 110, dailyRate: 160, currency: 'EUR', totalIncome: 17600 }
    ];
  }
}
