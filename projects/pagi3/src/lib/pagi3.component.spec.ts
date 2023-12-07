import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagi3Component } from './pagi3.component';

describe('Pagi3Component', () => {
  let component: Pagi3Component;
  let fixture: ComponentFixture<Pagi3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Pagi3Component]
    });
    fixture = TestBed.createComponent(Pagi3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
