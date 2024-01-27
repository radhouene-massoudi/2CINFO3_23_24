import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpComponent } from './addp.component';

describe('AddpComponent', () => {
  let component: AddpComponent;
  let fixture: ComponentFixture<AddpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
