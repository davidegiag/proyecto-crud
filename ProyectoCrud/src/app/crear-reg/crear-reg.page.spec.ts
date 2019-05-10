import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearRegPage } from './crear-reg.page';

describe('CrearRegPage', () => {
  let component: CrearRegPage;
  let fixture: ComponentFixture<CrearRegPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearRegPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearRegPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
