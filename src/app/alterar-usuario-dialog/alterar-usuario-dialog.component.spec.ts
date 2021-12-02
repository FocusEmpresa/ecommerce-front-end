import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarUsuarioDialogComponent } from './alterar-usuario-dialog.component';

describe('AlterarUsuarioDialogComponent', () => {
  let component: AlterarUsuarioDialogComponent;
  let fixture: ComponentFixture<AlterarUsuarioDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlterarUsuarioDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarUsuarioDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
