import { Component, ViewChild } from '@angular/core';
import { HeroDataService } from '../../services/hero-data.service';
import { INeedAHero } from '../../interfaces/app.interface';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
    /**
   * Массив объектов типа интерфейса INeedAHero,
   * Получаемый из сервиса hero-data.service
   *
   * @public
   * @type {INeedAHero[]}
   */
  public tableData: INeedAHero[] = this._hero.getHeroes();
     /**
   * Массив строк-названий столбцов таблицы
   *
   * @public
   * @type {string[]}
   */
  public displayedColumns: string[] = ['name', 'lvl', 'strength', 'power', 'delete'];
   /**
   * Массив объектов типа интерфейса INeedAHero,
   * равный tableData
   *
   * @public
   * @type {INeedAHero[]}
   */
  public dataSource: INeedAHero[] = this.tableData;
  /**
   * Объявление конструктора
   *
   * @param {HeroDataService} _hero Сервис hero-data.service
   */
  constructor(private readonly _hero: HeroDataService) {};
  /**
   * Ссылка на таблицу
   *
   * @type {MatTable<INeedAHero>}
   */
  @ViewChild(MatTable) public table?: MatTable<INeedAHero>
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
    this.table?.renderRows();
  };
}
