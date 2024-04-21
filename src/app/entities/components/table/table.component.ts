import { Component } from '@angular/core';
import { HeroDataService } from '../hero-data.service';
import { INeedAHero } from '../../interfaces/app.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  public tableData = this.heroDataService.getHeroes();

  constructor(private readonly heroDataService: HeroDataService) { }
 public onDelete(item: INeedAHero): void {
  console.log(item)
  // do something
}
}
