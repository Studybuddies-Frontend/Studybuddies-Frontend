import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormat'
})
export class TimeFormatPipe implements PipeTransform {

  transform(value: string): any {
    let hora;
    let min;
    let arr;
    let result;

    arr = value.split('.');
    hora= arr[0];
    min=arr[1];
    if(min!="0"){
      result= hora + " h " + min + " min";
    }
    if(min=="0"){
      result= hora + " h ";
    }
    return result;
  }

}