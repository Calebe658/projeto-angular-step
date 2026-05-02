import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoFilho } from './produto-filho';

describe('ProdutoFilho', () => {
  let component: ProdutoFilho;
  let fixture: ComponentFixture<ProdutoFilho>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutoFilho],
    }).compileComponents();

    fixture = TestBed.createComponent(ProdutoFilho);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
