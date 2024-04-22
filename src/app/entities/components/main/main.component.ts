import { Component, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { CreateForm } from './main.create-form.service';
import { FormGroup } from '@angular/forms';
// import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { INeedAHero } from '../../interfaces/app.interface';
import { HeroDataService } from '../services/hero-data.service';
import { FilterService } from '../services/filter.service';

/**  TODO {Sorting Based On Power(s) + after adding a hero}
          {Sorting Based On Level(min-max) after adding a hero} works!!!
          {Sorting of the table (asc|desc)} works!!!
          {Delete button for sorted array deletes a hero but doesnt refresh the array displayed in cards} !!!
          {Connect filters}
          (red field if empty)
*/
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements AfterViewInit {
  public data: INeedAHero[] = this._hero.getHeroes();

  public heroForm: FormGroup = this._fb.createForm()
  public power: FormGroup = this._fb.createPowerForm()

  public powers: string[] = this._hero.heroPower;

  public nameFilter: string = this._filter.nameFilter;
  public minLvl: number = this._filter.minLvlFilter;
  public maxLvl: number = this._filter.maxLvlFilter;
  public sortOrder: string = this._filter.orderFilter;
  public powerFilter: string[] = this._filter.powerFilter;

  public panelOpenState: boolean = false;



  constructor(
    private readonly _fb: CreateForm,
    private readonly _hero: HeroDataService,
    private readonly _filter: FilterService,
    private readonly _cdr: ChangeDetectorRef

  ) {}

  ngAfterViewInit(): void {
    this.applyFilters();
    this._cdr.detectChanges();

    console.log(this.nameFilter)
    console.log('filters are applied')
 }

  public onSave(): void {
    this._hero.hallOfHeroes.push(this.heroForm.value);
    this.sortHeroesByLevel(this.sortOrder);
    this.data = this._hero.getHeroes();
    this.heroForm.reset()
    this.applyFilters();
    // this.filterByName(this.nameFilter);
    // this.sortHeroesByLevel(this.sortOrder);
    // this.filterByPower(this.powerFilter);
    // this.levelFilter(this.minLvl, this.maxLvl);
  }
  public onPower(): void {
    this._hero.addPower(this.power.value.power)
    this.power.reset()
  }

  public onDelete(hero: INeedAHero): void {
    this._hero.deleteHero(hero);
    this.applyFilters();

  }

  public filterByName(name: string): void {
    this.nameFilter = this._filter.nameFilter = name
    this.data = this._hero.getHeroes().filter(hero => hero.name.toLowerCase().includes(name.toLowerCase()));
    console.log(this.nameFilter + " NAME_APPLIED")
  }

  public levelFilter(minLevelInput: string | Number, maxLevelInput: string | Number): void {
    this.minLvl = this._filter.minLvlFilter = Number(minLevelInput);
    this.maxLvl = this._filter.maxLvlFilter = Number(maxLevelInput)
    this.data = this._hero.getHeroes().filter(hero => hero.lvl >= this.minLvl && hero.lvl <= this.maxLvl);
    console.log(this.minLvl + " LVL_APPLIED")

  }

  public sortHeroesByLevel(order: string): void {
    this.sortOrder = this._filter.orderFilter = order;
    this.data.sort((a, b) => {
      console.log(this.sortOrder + " sort_APPLIED")
      return order === 'asc'
       ? a.lvl - b.lvl
        : b.lvl - a.lvl;

    });
  }
  public filterByPower(powers: string[]): void
  {
    this.powerFilter = this._filter.powerFilter = powers
    this.data = this._hero.getHeroes().filter(hero => powers.every(power => hero.power.includes(power)));
    console.log(this.powerFilter + " power_APPLIED")
  }
  public applyFilters(): void {
    // Apply filters here
    this.filterByName(this.nameFilter);
    this.sortHeroesByLevel(this.sortOrder);
    this.filterByPower(this.powerFilter);
    this.levelFilter(this.minLvl, this.maxLvl);
  }
}
