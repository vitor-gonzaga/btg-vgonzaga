import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';
import { ButtonModule } from './button.module';
import { EButton } from './models/EButton.enum';
import { IButton } from './models/IButton.interface';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  const buttonMock: IButton = {
    name: 'ItemB',
    type: EButton.INFO
  }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent],
      imports: [ButtonModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    component.buttonValues = buttonMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit on click', () => {
    // spy on event emitter
    spyOn(component.onClick, 'emit');
 
    // trigger the click
    const nativeElement = fixture.nativeElement;
    const button = nativeElement.querySelector('button');
    button.dispatchEvent(new Event('click'));
 
    fixture.detectChanges();
 
    expect(component.onClick.emit).toHaveBeenCalled();
 });
});
