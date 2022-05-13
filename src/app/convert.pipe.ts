import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {
    
  'temp':number;
  
  transform(value: any, source: any, target: any): any {
    this.temp = (target/source) * value;
    return  (Math.round(this.temp)).toFixed(2);
  }
  
}
