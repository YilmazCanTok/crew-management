import { Injectable } from '@angular/core';
import { Crew } from '../crew-list/crew.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrewService {
  private crewList: Crew[] = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      nationality: 'American',
      title: 'Captain',
      daysOnBoard: 100,
      dailyRate: 500,
      currency: 'USD',
      discount:0,
      totalIncome: 50000,
    },
    {
      id: 2,
      firstName: 'Anna',
      lastName: 'Smith',
      nationality: 'British',
      title: 'Engineer',
      daysOnBoard: 200,
      dailyRate: 400,
      currency: 'GBP',
      discount:0,
      totalIncome: 80000,
    },
    {
      id: 3,
      firstName: 'John',
      lastName: 'Doe',
      nationality: 'American',
      title: 'Captain',
      daysOnBoard: 100,
      dailyRate: 500,
      currency: 'USD',
      discount:0,
      totalIncome: 50000,
    },
    {
      id: 4,
      firstName: 'John',
      lastName: 'Doe',
      nationality: 'American',
      title: 'Captain',
      daysOnBoard: 100,
      dailyRate: 500,
      currency: 'USD',
      discount:0,
      totalIncome: 50000,
    },
    {
      id: 5,
      firstName: 'John',
      lastName: 'Doe',
      nationality: 'American',
      title: 'Captain',
      daysOnBoard: 100,
      dailyRate: 500,
      currency: 'USD',
      discount:0,
      totalIncome: 50000,
    },
  ];

  private crewListSubject = new BehaviorSubject<Crew[]>(this.crewList);

  getCrew(): Observable<Crew[]> {
    return this.crewListSubject.asObservable();
  }

  updateCrew(updatedCrew: Crew) {
    const index = this.crewList.findIndex(crew => crew.id === updatedCrew.id);
    if (index !== -1) {
      this.crewList[index] = updatedCrew;
      this.crewListSubject.next(this.crewList);
    }
  }

  createCrew(createdCrew: Crew) {
    createdCrew.id = this.crewList[this.crewList.length - 1].id+1
    this.crewList.push(createdCrew)
  }

  deleteCrew(id: number) {
    this.crewList = this.crewList.filter(c => c.id !== id);
    this.crewListSubject.next(this.crewList);
  }
}