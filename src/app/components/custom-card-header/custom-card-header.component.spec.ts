import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCardHeaderComponent } from './custom-card-header.component';

describe('CustomCardHeaderComponent', () => {
  let component: CustomCardHeaderComponent;
  let fixture: ComponentFixture<CustomCardHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomCardHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomCardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
