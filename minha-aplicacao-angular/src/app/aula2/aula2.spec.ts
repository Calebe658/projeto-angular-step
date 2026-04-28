import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aula2 } from './aula2';

describe('Aula2', () => {
  let component: Aula2;
  let fixture: ComponentFixture<Aula2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aula2],
    }).compileComponents();

    fixture = TestBed.createComponent(Aula2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
