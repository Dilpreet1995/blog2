import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavorateBlogComponent } from './favorate-blog.component';

describe('FavorateBlogComponent', () => {
  let component: FavorateBlogComponent;
  let fixture: ComponentFixture<FavorateBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavorateBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavorateBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
