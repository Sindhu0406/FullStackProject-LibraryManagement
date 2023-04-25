import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBookrecordsComponent } from './create-bookrecords.component';

describe('CreateBookrecordsComponent', () => {
  let component: CreateBookrecordsComponent;
  let fixture: ComponentFixture<CreateBookrecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBookrecordsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateBookrecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
