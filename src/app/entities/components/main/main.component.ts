import { Component, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { CreateForm } from './main.create-form.service';
import { FormGroup } from '@angular/forms';
import { INeedAHero } from '../../interfaces/app.interface';
import { HeroDataService } from '../../services/hero-data.service';
import { FilterService } from '../../services/filter.service';

// TO-DO
// Порядок атрибутов, поправить во всех файлах:
// @lena_rogoleva · right now
// <button [disabled]="!heroForm.valid"
        // (click)="onSave()"
        // mat-raised-button
        // type="button"
        // color="primary">
        // Create
// </button>
// CURRENT
// <button mat-raised-button
        // [disabled]="!heroForm.valid"
        // type="button"
        // (click)="onSave()"
        // color="primary"
// >Create</button>
// в аннотации необходимо также указывать @param (параметры, которые принимает функция)
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements AfterViewInit {
   /**
   * Массив объектов типа интерфейса INeedAHero,
   * Получаемый из сервиса hero-data.service
   *
   * @public
   * @type {INeedAHero[]}
   */
  public data: INeedAHero[] = this._hero.getHeroes();
   /**
   * объявление форм групы heroForm
   *
   * @public
   * @type {FormGroup}
   */
  public heroForm: FormGroup = this._fb.createForm();
   /**
   * объявление форм групы power
   *
   * @public
   * @type {FormGroup}
   */
  public power: FormGroup = this._fb.createPowerForm();
   /**
   * отсортированный массив строк типа string,
   * Получаемый из сервиса hero-data.service
   *
   * @public
   * @type {string[]}
   */
  public powers: string[] = this._hero.heroPower.sort();
   /**
   * значение для поиска по имени
   *
   * @public
   * @type {string}
   */
  public nameFilter: string = this._filter.nameFilter;
   /**
   * нижнее значение для фильтрации по уровню
   *
   * @public
   * @type {number}
   */
  public minLvl: number = this._filter.minLvlFilter;
   /**
   * верхнее значение для фильтрации по уровню
   *
   * @public
   * @type {number}
   */
  public maxLvl: number = this._filter.maxLvlFilter;
   /**
   * значение для фильтрации по возрастанию и убыванию уровня
   *
   * @public
   * @type {string}
   */
  public sortOrder: string = this._filter.orderFilter;
   /**
   * массив способностей для фильтрации
   *
   * @public
   * @type {string[]}
   */
  public powerFilter: string[] = this._filter.powerFilter;
   /**
   * булеан для  выпадающей карточки героя
   *
   * @public
   * @type {boolean}
   */
  public panelOpenState: boolean = false;
  /**
   * Объявление конструктора
   *
   * @param {CreateForm} _fb - сервис для создания формы героя
   * @param {HeroDataService} _hero - сервис для взаимодействия с данными героев
   * @param {FilterService} _hero - сервис для переменных фильтрации
   * @param {ChangeDetectorRef} _hero - сервис для детекции изменений
   */
  constructor(
    private readonly _fb: CreateForm,
    private readonly _hero: HeroDataService,
    private readonly _filter: FilterService,
    private readonly _cdr: ChangeDetectorRef
  ) {};
   /**
   * Фильтрация после создания компонента, а также детекция изменений
   *
   * @method
   * @description метод, который вызывается сразу после того,
   * как Angular завершит инициализацию представления компонента
   * @public
   * @return {void}
   */
  public ngAfterViewInit(): void {
    this.bigFilter(this.nameFilter, this.minLvl, this.maxLvl, this.sortOrder, this.powerFilter);
    this._cdr.detectChanges();
 };
   /**
   * функция сохранения героя.
   *
   * @method
   * @description сохраняет героя в массив и фильрует его с учётом новых героев
   * @public
   * @return {void}
   */
  public onSave(): void {
    this._hero.addHero(this.heroForm.value);
    this.data = this._hero.getHeroes();
    this.heroForm.reset({
      strength: 1,
      lvl: 1
      }
    )
    this.bigFilter(this.nameFilter, this.minLvl, this.maxLvl, this.sortOrder, this.powerFilter);
  };
   /**
   * Сохранение новой способности
   *
   * @method
   * @description метод для сохранения новой силы в массив
   * @public
   * @return {void}
   */
  public onPower(): void {
    this._hero.addPower(this.power.value.power.toLowerCase())
    this.power.reset()
  };
   /**
   * Удаление героя
   *
   * @method
   * @description метод для удаления героя из массива
   * @public
   * @return {void}
   */
  public onDelete(hero: INeedAHero): void {
    this._hero.deleteHero(hero);
    this.bigFilter(this.nameFilter, this.minLvl, this.maxLvl, this.sortOrder, this.powerFilter);
  };
   /**
   * Функция фильтрации
   *
   * @method
   * @description метод для фильтрации карточек героев
   * по всем критериям и сохранения этих значений в сервис
   * для использования при инициализации компонента
   * @public
   * @return {void}
   */
  public bigFilter(name: string, minLevelInput: string | Number, maxLevelInput: string | Number, order: string, powers: string[] ): void {
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
  };
}
