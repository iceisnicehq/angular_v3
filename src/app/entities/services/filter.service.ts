import { Injectable } from '@angular/core';
/**
 * @service {FilterService}
 * @description для хранения переменных фильтрации
 */
@Injectable({
  providedIn: 'root'
})
export class FilterService {
   /**
   * переменная для фильтра по имени
   *
   * @public
   * @type {string}
   */
  public nameFilter: string = '';
  /**
   * переменная для фильтра по способностям
   *
   * @public
   * @type {string[]}
   */
  public powerFilter: string[] = [];
  /**
   * переменная для сортировки по уровню
   *
   * @public
   * @type {string}
   */
  public orderFilter: string = 'desc';
   /**
   * верхнее значение для фильтрации по уровню
   *
   * @public
   * @type {number}
   */
  public minLvlFilter: number = 1
   /**
   * верхнее значение для фильтрации по уровню
   *
   * @public
   * @type {number}
   */
  public maxLvlFilter: number = 10
}
