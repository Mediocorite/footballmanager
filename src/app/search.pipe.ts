import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'SearchPipe'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, input: any): unknown {
    if(input) {
      return value.filter(val => val.PFName.toLowerCase().indexOf(input.toLowerCase()) >= 0 || val.PFName.toLowerCase().indexOf(input.toLowerCase()) >= 0 );
    } else {
      return value;
    }
  }

}
