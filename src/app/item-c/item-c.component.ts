import { Component, OnInit } from '@angular/core';
import { EButton, IButton } from 'btg-vgonzaga';

@Component({
  selector: 'app-item-c',
  templateUrl: './item-c.component.html',
  styleUrls: ['./item-c.component.scss']
})
export class ItemCComponent implements OnInit {
  buttonMock: IButton = {
    name: 'ItemC',
    type: EButton.ERROR
  }
  constructor() { }

  ngOnInit(): void {
  }

}
