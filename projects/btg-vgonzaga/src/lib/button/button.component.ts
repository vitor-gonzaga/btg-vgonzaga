import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EButton } from './models/EButton.enum';
import { IButton } from './models/IButton.interface';

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() buttonValues: IButton;
  @Output() onClick = new EventEmitter<MouseEvent>();
  public buttonType = EButton;

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * @description return the event for the parent component
   * @param {event} MouseEvent
   * @returns {void}
   */
  onClickButton(event: MouseEvent): void {
    this.onClick.emit(event);
  }

}
