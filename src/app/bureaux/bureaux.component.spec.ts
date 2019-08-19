import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BureauxComponent } from './bureaux.component';

describe('BureauxComponent', () => {
  let component: BureauxComponent;
  let fixture: ComponentFixture<BureauxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BureauxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BureauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
