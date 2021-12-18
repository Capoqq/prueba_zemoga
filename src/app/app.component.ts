import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

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
  list:boolean = false;
  grid:boolean = false;
  math:any = Math;
  diseno = new FormControl();
  bg_conditional = 'bg-pro';
  normal:boolean = true;
  tam_img:any = 'img-pulgares2';
  orientation:any = 'topm-0';
  py_2 = '';
  ngOnInit(): void {
   if(localStorage.getItem('datos')){
     console.log('hola')
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
              "picture": "../assets/img/kanye.png",
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
              "picture": "../assets/img/mark.png",
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
              "picture": "../assets/img/cristina.png",
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
              "picture": "../assets/img/malala.png",
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
              "picture": "../assets/img/elon.png",
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
              "picture": "../assets/img/greta.png",
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
    localStorage.removeItem('datos')
   localStorage.setItem('datos', JSON.stringify(this.data)) 
  }
  bajar(i:any){
    this.data[i].votes.negative = this.data[i].votes.negative + 1
    localStorage.removeItem('datos')
    localStorage.setItem('datos', JSON.stringify(this.data)) 
    console.log (this.data[i])
  }
  positivo(i:any){
    let boton = document.getElementById(`a${i}`);
    boton?.removeAttribute('disabled');
    boton?.classList.remove('btn-danger')
    boton?.classList.add('btn-primary')
    let arriba = document.getElementById(`positivo${i}`);
    let abajo = document.getElementById(`negativo${i}`);
    console.log(arriba,abajo)
    if(!arriba?.classList.contains("borde-blanco")){
      arriba?.classList.add("borde-blanco")
      console.log("hola")
    } 
     if(abajo?.classList.contains("borde-blanco")){
      abajo.classList.remove("borde-blanco")
      console.log("hola2")
    }
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
    let arriba = document.getElementById(`positivo${i}`);
    let abajo = document.getElementById(`negativo${i}`)
    console.log(arriba,abajo)
    if(!abajo?.classList.contains("borde-blanco")){
      abajo?.classList.add("borde-blanco")
    } 
    
    if(arriba?.classList.contains("borde-blanco")){
      arriba.classList.remove("borde-blanco")
    }
    if(this.down == false){
      this.down = true;
      this.up = false
    }
  }
  votar(i:any){
   this.votosBolean[i] = true
   if(this.up){
     this.subir(i)
    } else if(this.down){
      this.bajar(i)
    }
    console.log(this.data)
  }
  voteAgain(i:any){
   this.votosBolean[i] = false
   let boton = document.getElementById(`a${i}`);
   boton?.setAttribute('disabled', '');
  }
  cambioDiseno(){
    if(this.diseno.value == 1 ){
    /*   this.horizontal = true;
      this.vertical = false; */
      this.list = true;
      this.grid = false;
      this.normal = true
      this.bg_conditional = 'bg-pro';
      this.orientation = 'topm-0';
      this.tam_img = 'img-pulgares2';
      this.py_2 = '';
    }else if(this.diseno.value == 2){
      console.log('hola')
      /* this.vertical = true;
      this.horizontal = false; */
      this.list = false;
      this.grid = true;
      this.normal = false;
      this.bg_conditional = 'bg-pro2';
      this.orientation = 'top-94';
      this.tam_img = 'media-pulgares';
      this.py_2 = 'pym-2'
    }
  }
}