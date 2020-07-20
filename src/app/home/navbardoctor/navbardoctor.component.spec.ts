import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbardoctorComponent } from './navbardoctor.component';

describe('NavbardoctorComponent', () => {
  let component: NavbardoctorComponent;
  let fixture: ComponentFixture<NavbardoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbardoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbardoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
