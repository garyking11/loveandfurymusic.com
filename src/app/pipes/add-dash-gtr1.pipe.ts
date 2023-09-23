import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'addDashGtr1'
})
export class AddDashGtr1Pipe implements PipeTransform {
  transform(value: any) {
    if (value) {
      return value = value.replace(/GTR1/i, '(GTR1)').trim();
    }
  }
}
