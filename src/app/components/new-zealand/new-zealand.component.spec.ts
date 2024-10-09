import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewZealandComponent } from './new-zealand.component';

describe('NewZealandComponent', () => {
  let component: NewZealandComponent;
  let fixture: ComponentFixture<NewZealandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewZealandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewZealandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
