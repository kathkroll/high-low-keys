import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighLowKeysComponent } from './high-low-keys.component';

describe('HighLowKeysComponent', () => {
  let component: HighLowKeysComponent;
  let fixture: ComponentFixture<HighLowKeysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighLowKeysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighLowKeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
