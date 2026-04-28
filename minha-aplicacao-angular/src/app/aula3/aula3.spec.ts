import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aula3 } from './aula3';

describe('Aula3', () => {
  let component: Aula3;
  let fixture: ComponentFixture<Aula3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aula3],
    }).compileComponents();

    fixture = TestBed.createComponent(Aula3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
