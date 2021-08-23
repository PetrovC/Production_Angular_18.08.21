
import { Component, Input, OnInit, Output } from '@angular/core';
import { Fan } from 'src/app/models/fan.model';
import { FanService } from 'src/app/services/fan.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  listFan : Fan[] = []
  constructor(
    private _service : FanService
  ) { }

  ngOnInit(): void {
    this.listFan = this._service.getList()
  }
  toggleVisible(index : number) {
    this.listFan[index].Visible = !this.listFan[index].Visible
  }
}
