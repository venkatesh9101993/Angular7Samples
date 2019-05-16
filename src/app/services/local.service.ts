import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService {
  
  myPI =3.14
  bank=['sbi','kotak','hdfc']

  displaybanks()
  {
    console.log(this.bank)
  }
  addbanks()
  {
    this.bank.push('rbi')
    return this.bank
  }
  constructor() { }
}
