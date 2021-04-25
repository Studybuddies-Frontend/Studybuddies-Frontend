import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'classFilter'
})
export class ClassFilterPipe implements PipeTransform {

  transform(value: any, searchValue:any): any {

    if (!searchValue) return value;

    searchValue = searchValue.trim();
    searchValue = removeAccents(searchValue);

    return value.filter((v:any) => 
    removeAccents(v.university).toLowerCase().indexOf(searchValue.toLowerCase()) > -1 ||
    removeAccents(v.degree.toLowerCase()).indexOf(searchValue.toLowerCase()) > -1 ||
    removeAccents(v.subject.toLowerCase()).indexOf(searchValue.toLowerCase()) > -1 ||
    removeAccents(v.description.toLowerCase()).indexOf(searchValue.toLowerCase()) > -1 ||
    v.date.indexOf(searchValue) > -1 ||
    v.iTime.indexOf(searchValue) > -1 ||
    v.fTime.indexOf(searchValue) > -1 ||
    (v.price_per_hour.toString() + " €").indexOf(searchValue) > -1 ||
    (v.price_per_hour.toString() + "€").indexOf(searchValue) > -1)
  }
}

const removeAccents = (str:string) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
} 
