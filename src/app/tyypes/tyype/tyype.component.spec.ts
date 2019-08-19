import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TyypeComponent } from './tyype.component';

describe('TyypeComponent', () => {
  let component: TyypeComponent;
  let fixture: ComponentFixture<TyypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TyypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TyypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
