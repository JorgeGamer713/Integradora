import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleComponent } from './detalle-venta.component';

describe('DetalleVentaComponent', () => {
  let component: DetalleComponent;
  let fixture: ComponentFixture<DetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleVentaComponent } from './detalle-venta.component';

describe('DetalleVentaComponent', () => {
  let component: DetalleVentaComponent;
  let fixture: ComponentFixture<DetalleVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleVentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
}); */