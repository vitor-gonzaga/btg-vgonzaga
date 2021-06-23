import { Component, OnInit } from '@angular/core';
import { EButton } from 'src/models/EButton.enum';
import { IButton } from 'src/models/IButton.interface';

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
