import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cipher',
  templateUrl: './cipher.component.html',
  styleUrls: ['./cipher.component.css']
})
export class CipherComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  optionsAndLinks = [
    { codeOption: 'square', optionLink: 'https://pagrindinis123.herokuapp.com/cryptoSq', ltname: 'Kvadrato kodas', enname: 'Square cipher' },
    { codeOption: 'decSquare', optionLink: 'https://pagrindinis123.herokuapp.com/cryptoDec', ltname: 'Dekoduoti kvadrato kodą', enname: 'Decode square cipher' },
    { codeOption: 'rail', optionLink: 'https://pagrindinis123.herokuapp.com/railEncode', ltname: 'Tvoros kodas', enname: 'Rail fence cipher' },
    { codeOption: 'decrail', optionLink: 'https://pagrindinis123.herokuapp.com/railDecode', ltname: 'Dekoduoti tvoros kodą', enname: 'Decode rail fence cipher' },

  ]

  allowSubmit = true

  codedText=''
  breakTimer = 5;
  errorMessage = '';
  defaultValue = "square"
  number=3
  submitForm(form: NgForm) {
    this.allowSubmit = false

    let that = this

    for (let x of this.optionsAndLinks) {
      if (form.value.tipas == x.codeOption) {
        this.http.post<string>(x.optionLink, form.value, { responseType: 'text' as 'json' }).subscribe({
          next: data => {
            setTimeout(function () { that.allowSubmit = true; that.breakTimer = 5 }, 5000);
            setTimeout(function () { that.breakTimer = 1 }, 4000)
            setTimeout(function () { that.breakTimer = 2 }, 3000)
            setTimeout(function () { that.breakTimer = 3 }, 2000)
            setTimeout(function () { that.breakTimer = 4 }, 1000)
            this.codedText = data;
          },
          error: error => {
            setTimeout(function () { that.allowSubmit = true; that.breakTimer = 5 }, 5000);
            setTimeout(function () { that.breakTimer = 1 }, 4000)
            setTimeout(function () { that.breakTimer = 2 }, 3000)
            setTimeout(function () { that.breakTimer = 3 }, 2000)
            setTimeout(function () { that.breakTimer = 4 }, 1000)
            this.errorMessage = error.message;
            console.error('There was an error!', error);
          }
        })
      }
    }

  }
}
