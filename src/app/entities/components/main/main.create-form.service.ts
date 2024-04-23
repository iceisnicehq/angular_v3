import { Injectable } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
/**
 * @service {createDialogForm}
 * @description для создания реактивных форм
 */
@Injectable({
  providedIn: 'root',
})

export class CreateForm {
  constructor(private readonly _fb: FormBuilder) {}
  /**
   * @method createDialogForm
   * @description создание форм группы
   * @param {INeedAHero} [data] - начальные данные из главного компонента
   * @returns {FormGroup} возвращает форм группу
   */
  public createForm(): FormGroup {
      return this._fb.group({
        name: new FormControl('', [Validators.required]),
        strength: new FormControl(1, [Validators.required]),
        power: new FormControl('', [Validators.required]),
        lvl: new FormControl(1, [Validators.required])
      });
  }
  public createPowerForm(): FormGroup {
    return this._fb.group({
      power: new FormControl('', [Validators.required]),
    });
  }
}
