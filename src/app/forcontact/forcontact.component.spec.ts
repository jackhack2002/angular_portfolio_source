import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForcontactComponent } from './forcontact.component';

describe('ForcontactComponent', () => {
  let component: ForcontactComponent;
  let fixture: ComponentFixture<ForcontactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForcontactComponent]
    });
    fixture = TestBed.createComponent(ForcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
