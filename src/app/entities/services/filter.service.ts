import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  public nameFilter: string = '';
  public powerFilter: string[] = [];
  public orderFilter: string = 'desc'
  public minLvlFilter: number = 1
  public maxLvlFilter: number = 10

  constructor() {}
}
