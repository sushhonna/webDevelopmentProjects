import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomcolorComponent } from './randomcolor.component';

describe('RandomcolorComponent', () => {
  let component: RandomcolorComponent;
  let fixture: ComponentFixture<RandomcolorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RandomcolorComponent]
    });
    fixture = TestBed.createComponent(RandomcolorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
