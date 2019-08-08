import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptsListComponent } from './opts-list.component';

describe('OptsListComponent', () => {
  let component: OptsListComponent;
  let fixture: ComponentFixture<OptsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
