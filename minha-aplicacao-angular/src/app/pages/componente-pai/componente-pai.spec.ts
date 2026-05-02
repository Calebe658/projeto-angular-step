import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentePai } from './componente-pai';

describe('ComponentePai', () => {
  let component: ComponentePai;
  let fixture: ComponentFixture<ComponentePai>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentePai],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentePai);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
