import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filtre",
  pure: false
})
export class FiltrePipe implements PipeTransform {
  transform(value: any, filtered: string, propName: string): any {
    if (value.length == 0 || filtered == "") {
      return value;
    }
    const resultArray = [];

    for (const item of value) {
      if (
        item[propName].includes(filtered) ||
        item[propName].toUpperCase().includes(filtered) ||
        item[propName].toLowerCase().includes(filtered)
      ) {
        resultArray.push(item);
      }
    }

    return resultArray;
  }
}

