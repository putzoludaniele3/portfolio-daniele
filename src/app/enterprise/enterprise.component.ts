import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-enterprise',
  templateUrl: './enterprise.component.html',
  styleUrls: ['./enterprise.component.css']
})
export class EnterpriseComponent {

  companyLogos = [
    { src: 'assets/credit-agricole.png', alt: 'Credit Agricole' },
    { src: 'assets/san-paolo.svg', alt: 'Mercedes-Benz' },
    { src: 'assets/mercedes-benz-logo.png', alt: 'Mercedes-Benz' },
    { src: 'assets/reale-mutua.png', alt: 'Reale Mutua' },
    { src: 'assets/unipol-move.png', alt: 'Unipol Move' }
  ];

  constructor() { }


}
