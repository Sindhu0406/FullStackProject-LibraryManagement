import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBookdetailsComponent } from './update-bookdetails.component';

describe('UpdateBookdetailsComponent', () => {
  let component: UpdateBookdetailsComponent;
  let fixture: ComponentFixture<UpdateBookdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBookdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateBookdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
