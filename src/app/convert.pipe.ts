import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: any, targetUnits: string): any { // custom argument targetUnits

    if (!value) { // If no value was entered, return an empty string
      return '';
    }

    switch (targetUnits) {
      case 'km':
        return value * 1.60934;
      
      case 'm':
        return value * 1.60934 * 1000;

      case 'cm': 
        return value * 1.60934 * 1000 * 100;

      default:
        throw new Error ('Unit not supported!');
    }

  }

}
