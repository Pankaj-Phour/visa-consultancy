import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AustraliaPrComponent } from './australia-pr.component';

describe('AustraliaPrComponent', () => {
  let component: AustraliaPrComponent;
  let fixture: ComponentFixture<AustraliaPrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AustraliaPrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AustraliaPrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
