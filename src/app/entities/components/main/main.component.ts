import { Component } from '@angular/core';
import { CreateForm } from './main.create-form.service';
import { FormGroup } from '@angular/forms';
// import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { INeedAHero } from '../../interfaces/app.interface';
import { HeroDataService } from '../services/hero-data.service';
import { FilterService } from '../services/filter.service';

/**  TODO {Sorting Based On Power(s) + after adding a hero}
          {Sorting Based On Level(min-max) after adding a hero}
          {Sorting of the table (asc|desc)}
          {Delete button for sorted array deletes a hero but doesnt refresh the array displayed in cards}
          {}
          (red field if empty)
*/
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  public data: INeedAHero[] = this._hero.getHeroes();
  public heroForm: FormGroup = this._fb.createForm()
  public power: FormGroup = this._fb.createPowerForm()
  public powers: string[] = this._hero.heroPower;
  public sortOrder: string = this._filter.orderFilter;

  public panelOpenState: boolean = false;



  constructor(
    private readonly _fb: CreateForm,
    private readonly _hero: HeroDataService,
    private readonly _filter: FilterService
  ) {}

  public onSave(): void {
    this._hero.hallOfHeroes.push(this.heroForm.value);
    this.sortHeroesByLevel(this.sortOrder);
    this.data = this._hero.getHeroes();
    this.heroForm.reset()
    this.nameFilter(new Event (''))
    // this.sortHeroesByLevel(this.sortOrder)
    // this.levelFilter(minLevelInput: HTMLInputElement, maxLevelInput: HTMLInputElement);

  }
  public onPower(): void {
    this._hero.addPower(this.power.value.power)
    this.power.reset()
  }

  public onDelete(hero: INeedAHero): void {
    this._hero.deleteHero(hero);
  }

  public nameFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.data = this._hero.getHeroes().filter(hero => hero.name.toLowerCase().includes(filterValue.toLowerCase()));
  }
  public levelFilter(minLevelInput: HTMLInputElement, maxLevelInput: HTMLInputElement): void {
    const minLevel = parseInt(minLevelInput.value, 10);
    const maxLevel = parseInt(maxLevelInput.value, 10);
    this.data = this._hero.getHeroes().filter(hero => hero.lvl >= minLevel && hero.lvl <= maxLevel);
  }
  public sortHeroesByLevel(order: string): void {
    this.sortOrder = order;
    this.data.sort((a, b) => {
      return order === 'asc'
       ? a.lvl - b.lvl
        : b.lvl - a.lvl;
    });
  }
}
