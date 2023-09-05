import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayCourseComponent } from './today-course.component';

describe('TodayCourseComponent', () => {
  let component: TodayCourseComponent;
  let fixture: ComponentFixture<TodayCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodayCourseComponent]
    });
    fixture = TestBed.createComponent(TodayCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
