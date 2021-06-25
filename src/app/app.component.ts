import { Component } from '@angular/core';
import MaleNamesJson from '../assets/vornamen_m.json';
import FemaleNamesJson from '../assets/vornamen_w.json';
import LastNamesJson from '../assets/lastname.json';
import ZipcodeAndCityJson from '../assets/plz_stadt.json';
import DomainsJson from '../assets/domains.json';
import StrassenJson from '../assets/strassennamen.json';
import VorwahlenJson from '../assets/vorwahlen.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'random-angular';
  maleNames = MaleNamesJson;
  femaleNames = FemaleNamesJson;
  zipcodeAndCity = ZipcodeAndCityJson;
  lastNames = LastNamesJson;
  domains = DomainsJson;
  strassen = StrassenJson;
  vorwahlen = VorwahlenJson;

  currentGender: any = 'female';
  currentFirstname: any = '';
  currentZipcodeAndCity: any = '';
  currentLastName: any = '';
  currentDomain: any = '';
  currentStreet: any = '';
  currentStreetNumber: any = '';
  currentPrefixNumber: any = '';
  currentPhoneNumber: any = '';
  currentUserImage: any = '';

  constructor() {

    this.currentLastName =  this.random(this.lastNames);
    this.currentDomain = this.random(this.domains);
    this.currentZipcodeAndCity = this.random(this.zipcodeAndCity);
    this.currentStreet = this.random(this.strassen);
    this.currentPrefixNumber = this.random(this.vorwahlen);

    this.currentStreetNumber = this.randomNumber(200);
    this.currentPhoneNumber = this.randomNumber(9999999);

    if (this.currentGender == 'female') {
      this.currentFirstname = this.random(this.femaleNames);
      this.currentUserImage = "https://randomuser.me/api/portraits/women/" + this.randomNumber(99) + ".jpg";
    } else {
      this.currentFirstname = this.random(this.maleNames);
      this.currentUserImage = "https://randomuser.me/api/portraits/men/" + this.randomNumber(99) + ".jpg";
    }
  }

  random(array: any): void {
    const random = Math.floor(( Math.random() * array.length ))
    const current = array[random].item;
    return current;
  }

  randomNumber(until: any) {
    const randomInteger = Math.floor(Math.random() * until) + 1;
    return randomInteger;
  }

  changeGender() {
    if (this.currentGender == "female") {
      this.currentGender = "male"
    } else {
      this.currentGender = "female"
    }
  }


  ngOnInit() {
  }
}
