import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quest'
})
export class QuestPipe implements PipeTransform {

  transform(value: string, args?: string): string {
    return value.split('<pre>')[0].replace(/<[^>]*>/g, '').split(' ').slice(0, 30).join(' ').concat('...');
  }

}
