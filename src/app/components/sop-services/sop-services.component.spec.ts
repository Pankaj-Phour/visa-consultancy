import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SopServicesComponent } from './sop-services.component';

describe('SopServicesComponent', () => {
  let component: SopServicesComponent;
  let fixture: ComponentFixture<SopServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SopServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SopServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
