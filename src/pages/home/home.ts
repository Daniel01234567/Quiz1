import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    casas=[];
  constructor(public navCtrl: NavController, public http:HttpClient) {
this.http.get('/v1/pin-data?url=/s-renta-inmuebles/guadalajara-y-zona-metro/v1c1098l10567p1&geo=(21.10631012145462,-102.42214381725364),(20.21712862656199,-104.32387728274637)')
 .subscribe (data => {
  if (data.hasOwnProperty('ads')){
    this.casas=data['ads'];
  };
 },
 error=> {
  console.log(JSON.stringify(error));
 });


  }
}


//Las imagenes las saque de Pictures en la url de vivaanuncios
//El precio fue de price y con un artributo llamado formatted ammount
//La ubicacion fue de Geo, en la url e vivanuncios el cual tiene dos artributo llamadados displaynme y name