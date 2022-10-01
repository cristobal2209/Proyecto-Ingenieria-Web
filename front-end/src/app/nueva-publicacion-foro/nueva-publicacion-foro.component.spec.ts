import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaPublicacionForoComponent } from './nueva-publicacion-foro.component';

describe('NuevaPublicacionForoComponent', () => {
  let component: NuevaPublicacionForoComponent;
  let fixture: ComponentFixture<NuevaPublicacionForoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaPublicacionForoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevaPublicacionForoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
