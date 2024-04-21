import { Component, Inject } from '@angular/core';
import { CreateForm } from './main.create-form.service';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { INeedAHero } from '../../interfaces/app.interface';
import { HeroDataService } from '../hero-data.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  public data: INeedAHero[] = this._hero.getHeroes();

  public panelOpenState: boolean = false;

  public heroForm: FormGroup = this._fb.createForm()

  constructor(
    private readonly _fb: CreateForm,
    private readonly _hero: HeroDataService
  ) {
  }

  public onSave(): void {
    this._hero.hallOfHeroes.push(this.heroForm.value)
    console.table(this.heroForm.value)
    this.heroForm.reset()
    console.log(this._hero.hallOfHeroes)
  }
}
