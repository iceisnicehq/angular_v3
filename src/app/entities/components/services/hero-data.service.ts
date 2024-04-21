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
    strength: "10",
  },
]
/* . . . */

  addHero(hero: INeedAHero) {
    this.hallOfHeroes.push(hero);
  }

  getHeroes() {
    return this.hallOfHeroes;
  }
}
