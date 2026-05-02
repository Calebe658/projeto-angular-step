import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoPai } from './produto-pai';

describe('ProdutoPai', () => {
  let component: ProdutoPai;
  let fixture: ComponentFixture<ProdutoPai>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutoPai],
    }).compileComponents();

    fixture = TestBed.createComponent(ProdutoPai);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
