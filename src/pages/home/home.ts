import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TestPage } from '../test/test';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private url: string = 'beer.symfonycasts.com.br'
  constructor(public navCtrl: NavController, private http: Http) {
    this.http.get(this.url + '/beers')
             .map( res => res.json() )
             .subscribe( data => {
                console.log(data)
             })
  }

  goToTestPage(){
    /* Mudança de tela ou pagina */
    this.navCtrl.push(TestPage)
  }

}
