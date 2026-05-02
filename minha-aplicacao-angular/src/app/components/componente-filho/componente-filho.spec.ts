import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteFilho } from './componente-filho';

describe('ComponenteFilho', () => {
  let component: ComponenteFilho;
  let fixture: ComponentFixture<ComponenteFilho>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteFilho],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponenteFilho);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
