import { Injectable } from '@angular/core';
import { INeedAHero } from '../interfaces/app.interface';
/**
 * @service {HeroDataService}
 * @description для хранения данных о героях
 * и взаимодействия с массивом героев
 */
@Injectable({
  providedIn: 'root'
})
export class HeroDataService {
   /**
   * Изначальный массив объектов типа интерфейса INeedAHero,
   *
   * @public
   * @type {INeedAHero[]}
   */
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
];
   /**
   * Изначальный массив(строковый) способностей героев,
   *
   * @public
   * @type {string[]}
   */
  public heroPower: string[] = ['Strength', 'Speed', 'Flight', 'Stealth', 'Woman', 'Human', 'Alien', 'Smart'];
   /**
   * функция добавления героя
   *
   * @method
   * @description сохраняет героя в массив героев
   * @public
   * @param {INeedAHero} hero
   * @return {void}
   */
  public addHero(hero: INeedAHero): void {
    hero.name = hero.name.toLowerCase();
    hero.name = hero.name.charAt(0).toUpperCase() + hero.name.slice(1);
    this.hallOfHeroes.push(hero);
  };
   /**
   * функция добавления способности
   *
   * @method
   * @description сохраняет способность в массив способностей
   * @public
   * @param {string} power
   * @return {void}
   */
  public addPower(power: string): void {
    power = power.charAt(0).toUpperCase() + power.slice(1);
    if (this.heroPower.includes(power)) {
      alert("This power is already in the list.");
    }
    else {
      this.heroPower.push(power);
      this.heroPower.sort();
    }
  };
   /**
   * функция получения(значения) всех героев
   *
   * @method
   * @description возвращает массив героев типа интерфейса INeedAHero[]
   * @public
   * @return {INeedAHero[]}
   */
  public getHeroes(): INeedAHero[] {
    return this.hallOfHeroes;
  };
     /**
   * функция удаления
   *
   * @method
   * @description удаляет героя из массива
   * @public
   * @param {INeedAHero} hero
   * @return {void}
   */
  public deleteHero(hero: INeedAHero): void {
    const index: number = this.hallOfHeroes.findIndex((item) => item === hero);
    this.hallOfHeroes.splice(index, 1);
  };
}
