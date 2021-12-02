import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarProdutoDialogComponent } from './editar-produto-dialog.component';

describe('EditarProdutoDialogComponent', () => {
  let component: EditarProdutoDialogComponent;
  let fixture: ComponentFixture<EditarProdutoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarProdutoDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarProdutoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
