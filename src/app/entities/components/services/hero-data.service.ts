import { Injectable } from '@angular/core';
// import { BehaviorSubject, Subject } from 'rxjs';
import { INeedAHero } from '../../interfaces/app.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroDataService {

  public hallOfHeroes: INeedAHero[] = [
    {
    name: 'Superman',
    power: ['Strength'],
    lvl: 10,
    strength: "10",
  },
    {
    name: 'Batman',
    power: ['Stealth', 'Speed'],
    lvl: 5,
    strength: "10",
  },
    {
    name: 'Wonder Woman',
    power: ['Strength', 'Woman', 'Slay Queen'],
    lvl: 8,
    strength: "10",
  },
]
  public heroPower: string[] = ['Strength', 'Speed', 'Flight']

  public addHero(hero: INeedAHero): void {
    this.hallOfHeroes.push(hero);
  }
  // public addPower() {}

  public getHeroes(): INeedAHero[] {
    return this.hallOfHeroes;
  }
  public deleteHero(hero: INeedAHero): void {
    const index: number = this.hallOfHeroes.findIndex((item) => item === hero);
    this.hallOfHeroes.splice(index, 1);
  }
}
