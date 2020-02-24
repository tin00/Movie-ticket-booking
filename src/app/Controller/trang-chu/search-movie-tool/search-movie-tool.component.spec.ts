import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMovieToolComponent } from './search-movie-tool.component';

describe('SearchMovieToolComponent', () => {
  let component: SearchMovieToolComponent;
  let fixture: ComponentFixture<SearchMovieToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchMovieToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMovieToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
