import { Injectable } from '@angular/core';
import { Fan } from '../models/fan.model';

@Injectable({
  providedIn: 'root'
})

export class FanService{

    listFan: Fan[] = []

    constructor() { }

  ajout(nom : string, date : Date, series : string []) {
      this.listFan.push({Name : nom, BirthDate: date , ListSeries: series, Visible : false})
  }
  supprimerSerie(indexF:number, indexS:number){
      this.listFan[indexF].ListSeries.splice(indexS, 1)
  }
  ajoutSeries(serie: string, indexF: number){
      this.listFan[indexF].ListSeries.push(serie)
  }
  getList(): Fan[]{
    return this.listFan
  }
  update(index:number, nom : string, date : Date){
    this.listFan[index].Name = nom
    this.listFan[index].BirthDate = date
  }
  delete(index:number){
    this.listFan.splice(index,1)
  }
}