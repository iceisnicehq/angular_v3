import { Injectable } from '@angular/core';
import { INeedAHero } from '../../interfaces/app.interface';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  public nameFilter: string = '';
  public powerFilter: string[] = [];
  public orderFilter: string = 'desc'
  public minLvlFilter: number = 1
  public maxLvlFilter: number = 10
  constructor() {}

  public filterByName(name: string, data: INeedAHero): void {
    this.nameFilter = name;
    // const filterValue = (event.target as HTMLInputElement).value;
    // this.data = this._hero.getHeroes().filter(hero => hero.name.toLowerCase().includes(filterValue.toLowerCase()));
  }
  public filterByLevel(minLevelInput: HTMLInputElement, maxLevelInput: HTMLInputElement): void {
    // const minLevel = parseInt(minLevelInput.value, 10);
    // const maxLevel = parseInt(maxLevelInput.value, 10);
    // this.data = this._hero.getHeroes().filter(hero => hero.lvl >= minLevel && hero.lvl <= maxLevel);
  }
  public sortByLevel(order: string): void {
    // this.sortOrder = order;
    // this.data.sort((a, b) => {
    //   return order === 'asc'
    //    ? a.lvl - b.lvl
    //     : b.lvl - a.lvl;
    // });
  }
  public filterByPower(powers: string[]): void {
  }
}
  // TODO code sorting here  and store those variables here.
