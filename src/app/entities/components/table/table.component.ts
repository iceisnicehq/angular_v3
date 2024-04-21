import { Component } from '@angular/core';
import { HeroDataService } from '../services/hero-data.service';
import { INeedAHero } from '../../interfaces/app.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  public tableData = this._hero.getHeroes();
  displayedColumns: string[] = ['name', 'lvl', 'strength', 'skill', 'delete'];
  dataSource = this.tableData;
  constructor(private readonly _hero: HeroDataService) {}
 public onDelete(hero: INeedAHero): void {
  this._hero.deleteHero(hero);
    // this.table?.renderRows();
}
}
