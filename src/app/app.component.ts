import { ConvertPipe } from './convert.pipe';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
   providers: [ConvertPipe]
})

export class AppComponent {
  title = 'test';
  buttons: any=[
    
    { "id":"USD",  "value": 1.126735},
    { "id":"GBP", "value":0.876893},
    { "id":"INR", "value":79.677056}
];
'fromCurrency': object;
'toCurrency': object;
'inputCurrency':number;
result : string ='';

constructor(private convertPipe: ConvertPipe){

}

convert(c2: any,c1: any){
this.result = this.convertPipe.transform(c1,c2,this.inputCurrency);
}

getKeys() {
  return Object.keys(this.toCurrency);
}



}