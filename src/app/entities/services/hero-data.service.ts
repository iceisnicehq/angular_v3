import { Injectable } from '@angular/core';
// import { BehaviorSubject, Subject } from 'rxjs';
import { INeedAHero } from '../interfaces/app.interface';
// import { FilterService } from './filter.service';

@Injectable({
  providedIn: 'root'
})
export class HeroDataService {

  public hallOfHeroes: INeedAHero[] = [
    {
    name: 'Superman',
    power: ['Strength', 'Flight', 'Alien', 'Smart'],
    lvl: 10,
    strength: "10",
  },
    {
    name: 'Batman',
    power: ['Stealth', 'Speed', 'Human', 'Smart'],
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
  public heroPower: string[] = ['Strength', 'Speed', 'Flight', 'Stealth', 'Woman', 'Human', 'Alien', 'Smart']

  public addHero(hero: INeedAHero): void {
    hero.name = hero.name.charAt(0).toUpperCase() + hero.name.slice(1);
    this.hallOfHeroes.push(hero);
  }

  public addPower(power: string): void {
    if (this.heroPower.includes(power)) {
      alert("This power is already in the list.");
    }
    else {
      this.heroPower.push(power.charAt(0).toUpperCase() + power.slice(1));
      this.heroPower.sort();

  }
  }

  public getHeroes(): INeedAHero[] {
    return this.hallOfHeroes;
  }
  public deleteHero(hero: INeedAHero): void {
    const index: number = this.hallOfHeroes.findIndex((item) => item === hero);
    this.hallOfHeroes.splice(index, 1);
  }
}
