import { Component, OnInit } from '@angular/core';
import { EButton, IButton } from 'btg-vgonzaga';

@Component({
  selector: 'app-item-a',
  templateUrl: './item-a.component.html',
  styleUrls: ['./item-a.component.scss']
})
export class ItemAComponent implements OnInit {
  buttonMock: IButton = {
    name: 'ItemA',
    type: EButton.SUCCESS
  }
  constructor() { }

  ngOnInit(): void {
  }

}
