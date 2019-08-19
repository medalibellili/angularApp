import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TyypesComponent } from './tyypes.component';

describe('TyypesComponent', () => {
  let component: TyypesComponent;
  let fixture: ComponentFixture<TyypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TyypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TyypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
