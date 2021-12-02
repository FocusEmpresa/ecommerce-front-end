import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProdutoDialogComponent } from './delete-produto-dialog.component';

describe('DeleteProdutoDialogComponent', () => {
  let component: DeleteProdutoDialogComponent;
  let fixture: ComponentFixture<DeleteProdutoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteProdutoDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteProdutoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
