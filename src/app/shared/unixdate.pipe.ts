import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unixdate'
})

export class UnixdatePipe implements PipeTransform {
  transform(value: any): any {
    return new Date(value * 1000);
  }
}
