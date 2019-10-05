import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EssentialsPage } from './essentials.page';

describe('EssentialsPage', () => {
  let component: EssentialsPage;
  let fixture: ComponentFixture<EssentialsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EssentialsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EssentialsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
