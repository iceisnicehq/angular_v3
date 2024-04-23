import { Component, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { CreateForm } from './main.create-form.service';
import { FormGroup } from '@angular/forms';
// import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { INeedAHero } from '../../interfaces/app.interface';
import { HeroDataService } from '../../services/hero-data.service';
import { FilterService } from '../../services/filter.service';

/**  TODO
          (red field if empty) - optional
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

  public powers: string[] = this._hero.heroPower.sort();

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

  public ngAfterViewInit(): void {
    this.bigFilter(this.nameFilter, this.minLvl, this.maxLvl, this.sortOrder, this.powerFilter);
    this._cdr.detectChanges();
 }

  public onSave(): void {
    this._hero.addHero(this.heroForm.value);
    this.data = this._hero.getHeroes();
    this.heroForm.reset()
    this.bigFilter(this.nameFilter, this.minLvl, this.maxLvl, this.sortOrder, this.powerFilter);
  }
  public onPower(): void {
    this._hero.addPower(this.power.value.power)
    this.power.reset()
  }

  public onDelete(hero: INeedAHero): void {
    this._hero.deleteHero(hero);
    this.bigFilter(this.nameFilter, this.minLvl, this.maxLvl, this.sortOrder, this.powerFilter);

  }

  public bigFilter(name: string, minLevelInput: string | Number, maxLevelInput: string | Number, order: string, powers: string[] ): void {
    console.log('Applying filters...')
    this.nameFilter = this._filter.nameFilter = name
    this.minLvl = this._filter.minLvlFilter = Number(minLevelInput);
    this.maxLvl = this._filter.maxLvlFilter = Number(maxLevelInput);
    this.powerFilter = this._filter.powerFilter = powers;
    this.sortOrder = this._filter.orderFilter = order;
    this.data = this._hero.getHeroes().filter(hero => name.length >= 2 ? hero.name.toLowerCase().includes(name.toLowerCase()) : true)
                                      .filter(hero => hero.lvl >= this.minLvl && hero.lvl <= this.maxLvl)
                                      .filter(hero => powers.every(power => hero.power.includes(power)));
    this.data.sort((a, b) => {
      return order === 'asc'
       ? a.lvl - b.lvl
        : b.lvl - a.lvl;
    });
  }
}
