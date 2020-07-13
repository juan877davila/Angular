import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDestinoViajesComponent } from './form-destino-viajes.component';

describe('FormDestinoViajesComponent', () => {
  let component: FormDestinoViajesComponent;
  let fixture: ComponentFixture<FormDestinoViajesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDestinoViajesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDestinoViajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
