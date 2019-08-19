import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TyypeListComponent } from './tyype-list.component';

describe('TyypeListComponent', () => {
  let component: TyypeListComponent;
  let fixture: ComponentFixture<TyypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TyypeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TyypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
