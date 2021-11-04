import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let strArr = value.split(' ');
    value = strArr[1] + ' ' + strArr[0];
    return value;
  }

}
