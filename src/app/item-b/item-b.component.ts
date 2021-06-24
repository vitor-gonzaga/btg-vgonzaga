import { Component, OnInit } from '@angular/core';
import { EButton, IButton } from 'btg-vgonzaga';

@Component({
  selector: 'app-item-b',
  templateUrl: './item-b.component.html',
  styleUrls: ['./item-b.component.scss']
})
export class ItemBComponent implements OnInit {
  buttonMock: IButton = {
    name: 'ItemB',
    type: EButton.INFO
  }
  constructor() { }

  ngOnInit(): void {
  }

}
