import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAutComponent } from './show-aut.component';

describe('ShowAutComponent', () => {
  let component: ShowAutComponent;
  let fixture: ComponentFixture<ShowAutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
