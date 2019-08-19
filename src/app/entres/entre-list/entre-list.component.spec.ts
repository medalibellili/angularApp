import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntreListComponent } from './entre-list.component';

describe('EntreListComponent', () => {
  let component: EntreListComponent;
  let fixture: ComponentFixture<EntreListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntreListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntreListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
