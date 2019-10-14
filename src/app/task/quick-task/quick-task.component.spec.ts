import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickTaskComponent } from './quick-task.component';

describe('QuickTaskComponent', () => {
  let component: QuickTaskComponent;
  let fixture: ComponentFixture<QuickTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
