import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { randomInt } from 'crypto';

interface Card {
  nombre: string;
  texto: string;
  precio: number;
  imagen: string;
}

@Component({
  selector: 'app-main2',
  imports: [NgFor],
  templateUrl: './main2.component.html',
  styleUrl: './main2.component.css'
})
export class Main2Component {

  
  constructor(private http: HttpClient) {}

  // Array de cartas de tarot
  cards: Card[] = [
    {
      nombre: "The Fool",
      texto: "Descripción de The Fool",
      precio: 7,
      imagen: "/assets/tarot/tarot_1.png"
    },
    {
      nombre: "The Magician",
      texto: "Descripción de The Magician",
      precio: 3,
      imagen: "/assets/tarot/tarot_2.png"
    },
    {
      nombre: "The High Priestess",
      texto: "Descripción de The High Priestess",
      precio: 4,
      imagen: "/assets/tarot/tarot_3.png"
    },
    {
      nombre: "The Empress",
      texto: "Descripción de The Empress",
      precio: 8,
      imagen: "/assets/tarot/tarot_4.png"
    },
    {
      nombre: "The Emperor",
      texto: "Descripción de The Emperor",
      precio: 6,
      imagen: "/assets/tarot/tarot_5.png"
    },
    {
      nombre: "The Hierophant",
      texto: "Descripción de The Hierophant",
      precio: 2,
      imagen: "/assets/tarot/tarot_6.png"
    },
    {
      nombre: "The Lovers",
      texto: "Descripción de The Lovers",
      precio: 9,
      imagen: "/assets/tarot/tarot_7.png"
    },
    {
      nombre: "The Chariot",
      texto: "Descripción de The Chariot",
      precio: 5,
      imagen: "/assets/tarot/tarot_8.png"
    },
    {
      nombre: "Strength",
      texto: "Descripción de Strength",
      precio: 7,
      imagen: "/assets/tarot/tarot_9.png"
    },
    {
      nombre: "The Hermit",
      texto: "Descripción de The Hermit",
      precio: 3,
      imagen: "/assets/tarot/tarot_10.png"
    },
    {
      nombre: "Wheel of Fortune",
      texto: "Descripción de Wheel of Fortune",
      precio: 8,
      imagen: "/assets/tarot/tarot_11.png"
    },
    {
      nombre: "Justice",
      texto: "Descripción de Justice",
      precio: 6,
      imagen: "/assets/tarot/tarot_12.png"
    },
    {
      nombre: "The Hanged Man",
      texto: "Descripción de The Hanged Man",
      precio: 4,
      imagen: "/assets/tarot/tarot_13.png"
    },
    {
      nombre: "Death",
      texto: "Descripción de Death",
      precio: 5,
      imagen: "/assets/tarot/tarot_14.png"
    },
    {
      nombre: "Temperance",
      texto: "Descripción de Temperance",
      precio: 2,
      imagen: "/assets/tarot/tarot_15.png"
    },
    {
      nombre: "The Devil",
      texto: "Descripción de The Devil",
      precio: 9,
      imagen: "/assets/tarot/tarot_16.png"
    },
    {
      nombre: "The Tower",
      texto: "Descripción de The Tower",
      precio: 1,
      imagen: "/assets/tarot/tarot_17.png"
    },
    {
      nombre: "The Star",
      texto: "Descripción de The Star",
      precio: 6,
      imagen: "/assets/tarot/tarot_18.png"
    },
    {
      nombre: "The Moon",
      texto: "Descripción de The Moon",
      precio: 4,
      imagen: "/assets/tarot/tarot_19.png"
    },
    {
      nombre: "The Sun",
      texto: "Descripción de The Sun",
      precio: 8,
      imagen: "/assets/tarot/tarot_20.png"
    },
    {
      nombre: "Judgement",
      texto: "Descripción de Judgement",
      precio: 3,
      imagen: "/assets/tarot/tarot_21.png"
    },
    {
      nombre: "The World",
      texto: "Descripción de The World",
      precio: 9,
      imagen: "/assets/tarot/tarot_22.png"
    }
  ];

  ngOnInit(): void {
    
  }

}
