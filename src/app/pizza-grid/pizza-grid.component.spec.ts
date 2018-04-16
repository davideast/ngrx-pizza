import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaGridComponent } from './pizza-grid.component';

describe('PizzaGridComponent', () => {
  let component: PizzaGridComponent;
  let fixture: ComponentFixture<PizzaGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
