import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';


interface Voucher {
  nombre: string;
  efecto: string;
  imagen: string;
}

@Component({
  selector: 'app-main3',
  imports: [NgFor],
  templateUrl: './main3.component.html',
  styleUrls: ['./main3.component.css'],
})
export class Main3Component {
  constructor(private http: HttpClient) {}

  vouchers: Voucher[] = [
    {
      nombre: 'Overstock',
      efecto: '+1 card slot available in shop (to 3 slots)',
      imagen: '/assets/voucher/voucher_1.png'
    },
    {
      nombre: 'Overstock Plus',
      efecto: '+1 card slot available in shop (to 4 slots)',
      imagen: '/assets/voucher/voucher_2.png'
    },
    {
      nombre: 'Clearance Sale',
      efecto: 'All cards and packs in shop are 25% off',
      imagen: '/assets/voucher/voucher_3.png'
    },
    {
      nombre: 'Liquidation',
      efecto: 'All cards and packs in shop are 50% off',
      imagen: '/assets/voucher/voucher_4.png'
    },
    {
      nombre: 'Hone',
      efecto: 'Foil, Holographic, and Polychrome cards appear 2x more often',
      imagen: '/assets/voucher/voucher_5.png'
    },
    {
      nombre: 'Glow Up',
      efecto: 'Foil, Holographic, and Polychrome cards appear 4x more often',
      imagen: '/assets/voucher/voucher_6.png'
    },
    {
      nombre: 'Reroll Surplus',
      efecto: 'Rerolls cost $2 less',
      imagen: '/assets/voucher/voucher_7.png'
    },
    {
      nombre: 'Reroll Glut',
      efecto: 'Rerolls cost an additional $2 less',
      imagen: '/assets/voucher/voucher_8.png'
    },
    {
      nombre: 'Crystal Ball',
      efecto: '+1 consumable slot',
      imagen: '/assets/voucher/voucher_9.png'
    },
    {
      nombre: 'Omen Globe',
      efecto: 'Spectral cards may appear in any of the Arcana Packs',
      imagen: '/assets/voucher/voucher_10.png'
    },
    {
      nombre: 'Telescope',
      efecto: 'Celestial Packs always contain the Planet card for your most played poker hand',
      imagen: '/assets/voucher/voucher_11.png'
    },
    {
      nombre: 'Observatory',
      efecto: 'Planet cards in your consumable area give X1.5 Mult for their specified poker hand',
      imagen: '/assets/voucher/voucher_12.png'
    },
    {
      nombre: 'Grabber',
      efecto: 'Permanently gain +1 hand per round',
      imagen: '/assets/voucher/voucher_13.png'
    },
    {
      nombre: 'Nacho Tong',
      efecto: 'Permanently gain an additional +1 hand per round',
      imagen: '/assets/voucher/voucher_14.png'
    },
    {
      nombre: 'Wasteful',
      efecto: 'Permanently gain +1 discard each round',
      imagen: '/assets/voucher/voucher_15.png'
    },
    {
      nombre: 'Recyclomancy',
      efecto: 'Permanently gain an additional +1 discard each round',
      imagen: '/assets/voucher/voucher_16.png'
    },
    {
      nombre: 'Tarot Merchant',
      efecto: 'Tarot cards appear 2X more frequently in the shop',
      imagen: '/assets/voucher/voucher_17.png'
    },
    {
      nombre: 'Tarot Tycoon',
      efecto: 'Tarot cards appear 4X more frequently in the shop',
      imagen: '/assets/voucher/voucher_18.png'
    },
    {
      nombre: 'Planet Merchant',
      efecto: 'Planet cards appear 2X more frequently in the shop',
      imagen: '/assets/voucher/voucher_19.png'
    },
    {
      nombre: 'Planet Tycoon',
      efecto: 'Planet cards appear 4X more frequently in the shop',
      imagen: '/assets/voucher/voucher_20.png'
    },
    {
      nombre: 'Seed Money',
      efecto: 'Raise the cap on interest earned in each round to $10',
      imagen: '/assets/voucher/voucher_21.png'
    },
    {
      nombre: 'Money Tree',
      efecto: 'Raise the cap on interest earned in each round to $20',
      imagen: '/assets/voucher/voucher_22.png'
    },
    {
      nombre: 'Blank',
      efecto: 'Does nothing?',
      imagen: '/assets/voucher/voucher_23.png'
    },
    {
      nombre: 'Antimatter',
      efecto: '+1 Joker slot',
      imagen: '/assets/voucher/voucher_24.png'
    },
    {
      nombre: 'Magic Trick',
      efecto: 'Playing cards can be purchased from the shop',
      imagen: '/assets/voucher/voucher_25.png'
    },
    {
      nombre: 'Illusion',
      efecto: 'Playing cards in shop may have an Enhancement, Edition, and/or a Seal',
      imagen: '/assets/voucher/voucher_26.png'
    },
    {
      nombre: 'Hieroglyph',
      efecto: '-1 Ante, -1 hand each round',
      imagen: '/assets/voucher/voucher_27.png'
    },
    {
      nombre: 'Petroglyph',
      efecto: '-1 Ante, -1 discard each round',
      imagen: '/assets/voucher/voucher_28.png'
    },
    {
      nombre: 'Director\'s Cut',
      efecto: 'Reroll Boss Blind 1 time per Ante, $10 per roll',
      imagen: '/assets/voucher/voucher_29.png'
    },
    {
      nombre: 'Retcon',
      efecto: 'Reroll Boss Blind unlimited times, $10 per roll',
      imagen: '/assets/voucher/voucher_30.png'
    },
    {
      nombre: 'Paint Brush',
      efecto: '+1 hand size',
      imagen: '/assets/voucher/voucher_31.png'
    },
    {
      nombre: 'Palette',
      efecto: '+1 hand size again',
      imagen: '/assets/voucher/voucher_32.png'
    }
  ];
  

  ngOnInit(): void {}
}
