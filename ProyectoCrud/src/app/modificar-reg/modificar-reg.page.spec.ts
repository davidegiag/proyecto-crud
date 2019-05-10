import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarRegPage } from './modificar-reg.page';

describe('ModificarRegPage', () => {
  let component: ModificarRegPage;
  let fixture: ComponentFixture<ModificarRegPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarRegPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarRegPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
