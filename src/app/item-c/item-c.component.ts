import { Component, OnInit } from '@angular/core';
import { EButton } from 'src/models/EButton.enum';
import { IButton } from 'src/models/IButton.interface';

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
