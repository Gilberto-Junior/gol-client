import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAirplaneComponent } from './create-airplane.component';

describe('CreateAirplaneComponent', () => {
  let component: CreateAirplaneComponent;
  let fixture: ComponentFixture<CreateAirplaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAirplaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAirplaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
