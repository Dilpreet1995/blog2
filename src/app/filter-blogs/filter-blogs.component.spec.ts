import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterBlogsComponent } from './filter-blogs.component';

describe('FilterBlogsComponent', () => {
  let component: FilterBlogsComponent;
  let fixture: ComponentFixture<FilterBlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterBlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
