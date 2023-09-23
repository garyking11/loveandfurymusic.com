import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replacePdfSpace'
})
export class ReplacePdfSpacePipe implements PipeTransform {

  transform(value:any) {
    if (value) {
      return value  = value.replace(/\.PDF/i, ' ').trim();
    }
    return value;
  }

}
