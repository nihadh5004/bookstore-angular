import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'totalAmount'
})
export class TotalAmountPipe implements PipeTransform {

  transform(price: number, quantity: number): number {
    return price * quantity;
  }

}
