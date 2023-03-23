// creating a custom pipes

import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'percentage'
})

export class PercentagePipe implements PipeTransform{
    transform(value: number, totalmarks: number, decimal: number) {
        console.log('percentage is called');
        return (value/totalmarks * 100).toFixed(decimal);
    }
}