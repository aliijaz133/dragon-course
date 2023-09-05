import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodespacesComponent } from './codespaces.component';

describe('CodespacesComponent', () => {
  let component: CodespacesComponent;
  let fixture: ComponentFixture<CodespacesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodespacesComponent]
    });
    fixture = TestBed.createComponent(CodespacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
