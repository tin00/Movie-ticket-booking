import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatghePageComponent } from './datghe-page.component';

describe('DatghePageComponent', () => {
  let component: DatghePageComponent;
  let fixture: ComponentFixture<DatghePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatghePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatghePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
