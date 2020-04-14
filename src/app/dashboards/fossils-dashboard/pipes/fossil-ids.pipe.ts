import { Pipe, PipeTransform } from '@angular/core';
import fossilDict from './fossil-ids-dictionary';

@Pipe({
  name: 'fossilIds'
})
export class FossilIdsPipe implements PipeTransform {

  transform(value: string): string {
    return fossilDict[value];
  }

}
