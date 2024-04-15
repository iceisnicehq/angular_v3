import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrisisListComponent } from './crisis-list.component';

describe('CrisisListComponent', () => {
  let component: CrisisListComponent;
  let fixture: ComponentFixture<CrisisListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrisisListComponent]
    });
    fixture = TestBed.createComponent(CrisisListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
