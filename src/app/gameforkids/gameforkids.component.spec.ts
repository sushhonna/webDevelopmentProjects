import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameforkidsComponent } from './gameforkids.component';

describe('GameforkidsComponent', () => {
  let component: GameforkidsComponent;
  let fixture: ComponentFixture<GameforkidsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameforkidsComponent]
    });
    fixture = TestBed.createComponent(GameforkidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
