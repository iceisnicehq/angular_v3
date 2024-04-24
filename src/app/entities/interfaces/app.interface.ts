/**
 *  Интрефейс героя, универсальный интерфейс
 *
 * @param {string} name - имя героя
 * @param {string} strength - сила героя
 * @param {string[]} power - способности героя
 * @param {number} lvl - уровень героя
 */

export interface INeedAHero {
  name: string,
  strength: string,
  power: string[],
  lvl: number,
}
