import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowGenComponent } from './show-gen.component';

describe('ShowGenComponent', () => {
  let component: ShowGenComponent;
  let fixture: ComponentFixture<ShowGenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowGenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
