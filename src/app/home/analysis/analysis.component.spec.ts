import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ANALYSISComponent } from './analysis.component';

describe('ANALYSISComponent', () => {
  let component: ANALYSISComponent;
  let fixture: ComponentFixture<ANALYSISComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ANALYSISComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ANALYSISComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
