import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoblieAppComponent } from './moblie-app.component';

describe('MoblieAppComponent', () => {
  let component: MoblieAppComponent;
  let fixture: ComponentFixture<MoblieAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoblieAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoblieAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
