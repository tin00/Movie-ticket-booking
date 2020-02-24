import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RapPhimComponent } from './rap-phim.component';

describe('RapPhimComponent', () => {
  let component: RapPhimComponent;
  let fixture: ComponentFixture<RapPhimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RapPhimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RapPhimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
