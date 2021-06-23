import { Component, OnInit } from '@angular/core';
import { EButton } from 'projects/btg-vgonzaga/src/lib/button/models/Ebutton.enum';
import { IButton } from 'projects/btg-vgonzaga/src/lib/button/models/Ibutton.interface';

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
