import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit	 {
  title = 'zemogaPrueba';
  data:any | null = '';
  datos = localStorage.getItem('datos');
  up:boolean = false;
  down:boolean = false;
  votosBolean:any[] = [];
  horizontal:boolean = false;
  vertical:boolean = false;
  ngOnInit(): void {
   if(localStorage.getItem('datos')){
     this.data = JSON.parse(this.datos || '{}')
      this.data.forEach((element:any) => {
        this.votosBolean.push(false)
      });
   } else{
      this.data= [
          {
              "name": "Kanye West",
              "description": "Born in Atlanta and raised in Chicago, West was first known as a producer for Roc-A-Fella Records in the early 2000s, producing singles for several mainstream artists.",
              "category": "entertainment",
              "picture": "../assets/img/kayne.jpg",
              "lastUpdated": "2020-03-10T23:08:57.892Z",
              "votes": {
                  "positive": 23,
                  "negative": 36
              }
          },
          {
              "name": "Mark Zuckerberg",
              "description": "Born in White Plains, New York, Zuckerberg attended Harvard University, where he launched the Facebook social networking service from his dormitory room on February 4, 2004.",
              "category": "business",
              "picture": "../assets/img/mark.jpg",
              "lastUpdated": "2021-02-14T23:10:19.134Z",
              "votes": {
                  "positive": 418,
                  "negative": 324
              }
          },
          {
              "name": "Cristina Fernández de Kirchner",
              "description": "Her first term of office started with a conflict with the agricultural sector, and her proposed taxation system was rejected.",
              "category": "politics",
              "picture": "../assets/img/cristina.jpg",
              "lastUpdated": "2020-12-10T23:41:07.120Z",
              "votes": {
                  "positive": 45,
                  "negative": 97
              }
          },
          {
              "name": "Malala Yousafzai",
              "description": "The daughter of educational activist Ziauddin, Yousafzai was born to a Pashtun family in Mingora, Khyber Pakhtunkhwa, Pakistan. Her family came to run a chain of schools in the region.",
              "category": "politics",
              "picture": "../assets/img/malala.jpg",
              "lastUpdated": "2020-12-10T23:41:07.120Z",
              "votes": {
                  "positive": 18,
                  "negative": 3
              }
          },
          {
              "name": "Elon Musk",
              "description": "In 2002, Musk founded SpaceX, an aerospace manufacturer and space transport services company, of which he is CEO, CTO, and lead designer.",
              "category": "business",
              "picture": "../assets/img/elon.jpg",
              "lastUpdated": "2020-12-20T23:43:38.041Z",
              "votes": {
                  "positive": 1237,
                  "negative": 894
              }
          },
          {
              "name": "Greta Thumberg",
              "description": "Thunberg's activism started after convincing her parents to adopt several lifestyle choices to reduce their own carbon footprint.",
              "category": "environment",
              "picture": "../assets/img/greta.jpg",
              "lastUpdated": "2021-02-26T23:44:50.326Z",
              "votes": {
                  "positive": 118,
                  "negative": 45
              }
          }
      ]
      this.data.forEach((element:any) => {
        this.votosBolean.push(false)
      });
   }

    
  }
  subir(i:any){
    this.data[i].votes.positive =   this.data[i].votes.positive + 1
   localStorage.setItem('datos', JSON.stringify(this.data)) 
  }
  bajar(i:any){
    this.data[i].votes.negative = this.data[i].votes.negative - 1
    console.log (this.data[i])
  }
  positivo(i:any){
    let boton = document.getElementById(`a${i}`);
    boton?.removeAttribute('disabled');
    boton?.classList.remove('btn-danger')
    boton?.classList.add('btn-primary')
    if(this.up == false){
      this.up = true;
      this.down = false
    }
  }
  negativo(i:any){
    let boton = document.getElementById(`a${i}`);
    console.log(boton)
    boton?.removeAttribute('disabled');
   boton?.classList.remove('btn-primary')
    boton?.classList.add('btn-danger')
    if(this.down == false){
      this.down = true;
      this.up = false
    }
  }
  votar(i:any){
   this.votosBolean[i] = true
   console.log(this.votosBolean)
    if(this.up){
    this.subir(i)
    } else if(this.down){
      this.bajar(i)
    }
  }
  voteAgain(i:any){
   this.votosBolean[i] = false
   let boton = document.getElementById(`a${i}`);
   boton?.setAttribute('disabled', '');
  }
  cambioDiseno(estilo:any){
    if(estilo == 'horizontal'){
      this.horizontal = true;
      this.vertical = false;
    }else if(estilo == 'vertical'){
      console.log('hola')
      this.vertical = true;
      this.horizontal = false;
    }
  }
}