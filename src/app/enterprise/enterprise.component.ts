import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-enterprise',
  templateUrl: './enterprise.component.html',
  styleUrls: ['./enterprise.component.css']
})
export class EnterpriseComponent implements AfterViewInit {

  companyLogos = [
    { src: 'assets/credit-agricole.png', alt: 'Credit Agricole' },
    { src: 'assets/san-paolo.svg', alt: 'Mercedes-Benz' },
    { src: 'assets/mercedes-benz-logo.png', alt: 'Mercedes-Benz' },
    { src: 'assets/reale-mutua.png', alt: 'Reale Mutua' },
    { src: 'assets/unipol-move.png', alt: 'Unipol Move' }
  ];

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    });

    const sections = this.el.nativeElement.querySelectorAll('.fade-in-section');
    sections.forEach((section: any) => {
      observer.observe(section);
    });
  }

}
