import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutTrangChuComponent } from './layout-trang-chu.component';

describe('LayoutTrangChuComponent', () => {
  let component: LayoutTrangChuComponent;
  let fixture: ComponentFixture<LayoutTrangChuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutTrangChuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutTrangChuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
