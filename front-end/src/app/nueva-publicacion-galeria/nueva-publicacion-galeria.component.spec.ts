import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaPublicacionGaleriaComponent } from './nueva-publicacion-galeria.component';

describe('NuevaPublicacionGaleriaComponent', () => {
  let component: NuevaPublicacionGaleriaComponent;
  let fixture: ComponentFixture<NuevaPublicacionGaleriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaPublicacionGaleriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevaPublicacionGaleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
