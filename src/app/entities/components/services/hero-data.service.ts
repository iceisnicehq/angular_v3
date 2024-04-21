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
    skill: 'Strength',
    lvl: "10",
    strength: ["10"],
  },
    {
    name: 'Batman',
    skill: 'Stealth',
    lvl: "10",
    strength: ["10"],
  },
    {
    name: 'Wonder Woman',
    skill: 'Strength',
    lvl: "10",
    strength: ["10"],
  },
]
  public heroPower: string[] = ['Strength', 'Speed', 'Flight']

  addHero(hero: INeedAHero) {
    this.hallOfHeroes.push(hero);
  }

  getHeroes() {
    return this.hallOfHeroes;
  }
  public deleteHero(hero: INeedAHero): void {
    const index: number = this.hallOfHeroes.findIndex((item) => item === hero);
    this.hallOfHeroes.splice(index, 1);
  }
}
