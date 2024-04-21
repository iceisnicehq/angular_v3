import { Component } from '@angular/core';
import { CreateForm } from './main.create-form.service';
import { FormGroup } from '@angular/forms';
// import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { INeedAHero } from '../../interfaces/app.interface';
import { HeroDataService } from '../services/hero-data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  public data: INeedAHero[] = this._hero.getHeroes();
  public powers: string[] = this._hero.heroPower;
  public power: FormGroup = this._fb.createPowerForm()

  public panelOpenState: boolean = false;

  public heroForm: FormGroup = this._fb.createForm()

  constructor(
    private readonly _fb: CreateForm,
    private readonly _hero: HeroDataService
  ) {
  }

  public onSave(): void {
    this._hero.hallOfHeroes.push(this.heroForm.value);
    this.data = this._hero.getHeroes();
    this.heroForm.reset()
    this.nameFilter(new Event (''))
    // this.levelFilter(minLevelInput: HTMLInputElement, maxLevelInput: HTMLInputElement);

  }
  public addPower(): void {
    if (this.powers.includes(this.power.value.power)) {
      alert("This power is already in the list.");
    }
    else {
    this.powers.push(this.power.value.power)
    this.power.reset()
    console.log(this.powers)
  }
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
}
