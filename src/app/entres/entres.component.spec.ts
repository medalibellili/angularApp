import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntresComponent } from './entres.component';

describe('EntresComponent', () => {
  let component: EntresComponent;
  let fixture: ComponentFixture<EntresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
