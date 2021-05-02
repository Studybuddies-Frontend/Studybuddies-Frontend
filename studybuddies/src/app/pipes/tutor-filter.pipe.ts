import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tutorFilter'
})
export class TutorFilterPipe implements PipeTransform {

  transform(value: any, searchValue:any): any {

    if (!searchValue) return value;

    searchValue = searchValue.trim();
    searchValue = removeAccents(searchValue);

    return value.filter((v:any) => 
    removeAccents(v.universidad).toLowerCase().indexOf(searchValue.toLowerCase()) > -1 ||
    removeAccents(v.email.toLowerCase()).indexOf(searchValue.toLowerCase()) > -1 ||
    removeAccents(v.nombre.toLowerCase()).indexOf(searchValue.toLowerCase()) > -1 ||
    removeAccents(v.descripcion.toLowerCase()).indexOf(searchValue.toLowerCase()) > -1)
  }
}

const removeAccents = (str:string) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
} 
