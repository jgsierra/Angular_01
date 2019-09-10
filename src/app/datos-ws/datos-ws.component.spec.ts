import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosWSComponent } from './datos-ws.component';

describe('DatosWSComponent', () => {
  let component: DatosWSComponent;
  let fixture: ComponentFixture<DatosWSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosWSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosWSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
