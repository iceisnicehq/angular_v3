import { Injectable } from '@angular/core';
// import { BehaviorSubject, Subject } from 'rxjs';
import { INeedAHero } from '../interfaces/app.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroDataService {
  // public heroData = new BehaviorSubject <INeedAHero[]>([]);
  // sharedHero$ = this.heroData.asObservable();
  // saveHero()

  // constructor() { }

  // addHero(hero: INeedAHero) {
  //   this.heroData.next([...this.heroData.value, hero]);
  // }
  public hallOfHeroes: INeedAHero[] = [];
/* . . . */

  addHero(hero: INeedAHero) {
    this.hallOfHeroes.push(hero);
  }

  getHeroes() {
    return this.hallOfHeroes;
  }
}
