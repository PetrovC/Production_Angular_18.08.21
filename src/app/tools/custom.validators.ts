import { AbstractControl, ValidatorFn } from "@angular/forms";

export function MinChar(longueur : number) : ValidatorFn {
    return (control : AbstractControl) => {
        let myInput : string = control.value
        if(myInput == null) return null;
        if(control.dirty && myInput.length < longueur) return {TropCourtError : "Le champ doit contenir minimum" + longueur + " charactère(s)"}
        return null;
    }
} 

export function MinAge(minAge : number) : ValidatorFn {
  return (control : AbstractControl) => {
      let CurrentYear: number = new Date().getFullYear()
      let BirthDateUser: Date = control.value
      let BirthDateUserYear : number = parseInt(BirthDateUser.toString().substring(0,4))
      if(BirthDateUserYear == null) return null;
      if((CurrentYear-BirthDateUserYear) < 13) return {AgeError : 'Interdit au moins de 13 ans'}
      return null;
  }
}