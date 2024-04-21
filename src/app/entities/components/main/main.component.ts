import { Component, Inject } from '@angular/core';
import { CreateForm } from './main.create-form.service';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
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
    this._hero.hallOfHeroes.push(this.heroForm.value)
    // console.table(this.heroForm.value)
    this.heroForm.reset()
    // console.log(this._hero.hallOfHeroes)
  }
  public addPower(): void {
    this.powers.push(this.power.value.power)
    this.power.reset()
    console.log(this.powers)
  }
  public onDelete(hero: INeedAHero): void {
    this._hero.deleteHero(hero);
  }
}
