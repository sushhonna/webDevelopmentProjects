import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharcounterComponent } from './charcounter.component';

describe('CharcounterComponent', () => {
  let component: CharcounterComponent;
  let fixture: ComponentFixture<CharcounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharcounterComponent]
    });
    fixture = TestBed.createComponent(CharcounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
