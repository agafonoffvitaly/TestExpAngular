import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditGenComponent } from './add-edit-gen.component';

describe('AddEditGenComponent', () => {
  let component: AddEditGenComponent;
  let fixture: ComponentFixture<AddEditGenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditGenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
