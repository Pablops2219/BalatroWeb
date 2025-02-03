import { NgFor } from '@angular/common';
import { Component, OnInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { randomInt } from 'crypto';

interface Card {
  text: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-main',
  imports: [NgFor],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})

export class MainComponent implements OnInit {

  cards: Card[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<string[]>('/assets/cards.json').subscribe((imageNames) => {
      this.cards = imageNames.map((imageName) => {
        const [numberAndSuit, modifier = 'default', seal = 'no_s'] = imageName.split('_');
        var number = numberAndSuit.slice(0, -1); // Extrae el número
        const suit = numberAndSuit.slice(-1); // Extrae el palo

        // Mapea el palo a su nombre completo
        const suitMap: { [key: string]: string } = {
          'C': 'Corazones',
          'H': 'Corazones Rojos',
          'S': 'Espadas',
          'D': 'Diamantes'
        };

        // Mapea el modificador
        const modifierMap: { [key: string]: string } = {
          'default': 'Estándar',
          'wild': 'Salvaje',
          'stone': 'Piedra',
          'mult': 'Multiplicada',
          'bonus': 'Bonus',
          'glass': 'Cristal',
          'lucky': 'De la Suerte',
          'steel': 'Acero',
          'gold': 'Oro'
        };

        // Mapea el sello
        const sealMap: { [key: string]: string } = {
          'no': 'Sin sello',
          'purple': 'Sello púrpura',
          'blue': 'Sello azul',
          'red': 'Sello rojo',
          'gold': 'Sello dorado'
        };
        
        if(number === 'A') {
          number = 'As';
        }
        if(number === 'J') {
          number = 'Sota';
        }
        if(number === 'K') {
          number = 'Rey';
        }
        if(number === 'Q') {
          number = 'Reina';
        }

        const text = `${number} de ${suitMap[suit]} (${modifierMap[modifier]}, ${sealMap[seal]})`;
        return {
          text,
          price: randomInt(10), // Puedes ajustar el precio según sea necesario
          image: `/assets/output_cards/${imageName}`
        };
      });
    });
  }


}
