import { Component, OnInit } from '@angular/core';
import { EButton } from 'projects/btg-vgonzaga/src/lib/button/models/Ebutton.enum';
import { IButton } from 'projects/btg-vgonzaga/src/lib/button/models/Ibutton.interface';

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
