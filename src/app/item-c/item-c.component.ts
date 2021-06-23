import { Component, OnInit } from '@angular/core';
import { EButton } from 'projects/btg-vgonzaga/src/lib/button/models/Ebutton.enum';
import { IButton } from 'projects/btg-vgonzaga/src/lib/button/models/Ibutton.interface';

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
