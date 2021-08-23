import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Fan } from 'src/app/models/fan.model';
import { FanService } from 'src/app/services/fan.service';
import { MinAge, MinChar } from 'src/app/tools/custom.validators';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})

export class UpdateComponent implements OnInit {

  myForm : FormGroup = this._formBuild.group({})
  myFormS : FormGroup = this._formBuildS.group({})
  listFan : Fan[] = []
  indexUser : number = 0
  name: string = ""
  SupSerie:boolean=false
  SupUser: boolean=false
  iF: number = 0
  iS: number = 0
  
  AjoutSerie:boolean=false

  constructor(
    private _service : FanService,
    private _formBuild : FormBuilder,
    private _formBuildS : FormBuilder
  ) { }

  ngOnInit(): void {
    this.listFan = this._service.getList()
    this.myForm = this._formBuild.group({
      Nom : ["", [Validators.required, MinChar(2)]],
      DateB : ["", [Validators.required, MinAge(13)]]
    }, Validators.required)
    this.myFormS = this._formBuildS.group({
      Serie : ["", [Validators.required, MinChar(2)]]
    }, Validators.required)
  }
  delAlert(s:number,f:number){
    this.SupSerie= !this.SupSerie
    this.iF = f
    this.iS = s
  }
  toggleVisible(index : number) {
    this.listFan[index].Visible = !this.listFan[index].Visible
  }
  modifS(indexF:number){
    this._service.ajoutSeries(this.myForm.value.Serie, indexF)
    this.AjoutSerie= !this.AjoutSerie
  }
  ToSerie(){
    this.AjoutSerie= !this.AjoutSerie
  }
  delSeries(){
    this._service.supprimerSerie(this.iF, this.iS)
    this.SupSerie= !this.SupSerie
  }
  update(indexf:number){
      this._service.update(indexf, this.myForm.value.Nom, this.myForm.value.DateB)
  }
  delAlertUser(index:number){
    this.indexUser = index
    this.SupUser= !this.SupUser
  }
  deleteU(){
    this._service.delete(this.indexUser)
    this.SupUser= !this.SupUser
  }
}

