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
    /**
   * Объявление конструктора
   *
   * @param {MatDialog} _dialog - сервис диалога
   * @param {destroyRef} _destroyRef - отписка
   */
  constructor(private readonly _fb: FormBuilder) {}
  /**
   * @method createForm
   * @description создание форм группы
   * для добавления героя
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
   /**
   * @method createPowerForm
   * @description создание форм группы
   * для добавления способностей
   * @returns {FormGroup} возвращает форм группу
   */
  public createPowerForm(): FormGroup {
    return this._fb.group({
      power: new FormControl('', [Validators.required]),
    });
  }
}
