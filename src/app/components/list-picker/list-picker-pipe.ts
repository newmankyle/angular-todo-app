import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
  name: "determineLength",
  pure: true
})
export class DetermineLength implements PipeTransform {
  transform(value: string, ...args: any[]) {
    return value.length > window.innerWidth / 3;
  }
}
