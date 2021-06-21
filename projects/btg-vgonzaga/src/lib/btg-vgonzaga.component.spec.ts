import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtgVgonzagaComponent } from './btg-vgonzaga.component';

describe('BtgVgonzagaComponent', () => {
  let component: BtgVgonzagaComponent;
  let fixture: ComponentFixture<BtgVgonzagaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtgVgonzagaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtgVgonzagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
