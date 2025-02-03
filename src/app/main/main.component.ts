import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  imports: [NgFor],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  cards = [
    { text: 'Card 1', price: 2 },
    { text: 'Card 2', price: 2.2 },
    { text: 'Card 3', price: 2.3 },
    
  ];
}
