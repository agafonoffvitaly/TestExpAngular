import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditAutComponent } from './add-edit-aut.component';

describe('AddEditAutComponent', () => {
  let component: AddEditAutComponent;
  let fixture: ComponentFixture<AddEditAutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditAutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditAutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
