import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutChiTietPhimComponent } from './layout-chi-tiet-phim.component';

describe('LayoutChiTietPhimComponent', () => {
  let component: LayoutChiTietPhimComponent;
  let fixture: ComponentFixture<LayoutChiTietPhimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutChiTietPhimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutChiTietPhimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
