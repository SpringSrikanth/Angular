import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsbynameComponent } from './commentsbyname.component';

describe('CommentsbynameComponent', () => {
  let component: CommentsbynameComponent;
  let fixture: ComponentFixture<CommentsbynameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentsbynameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsbynameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
