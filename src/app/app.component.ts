import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add('show');  // Aggiungi la classe per mostrare il componente
        } else {
          entry.target.classList.remove('show');  // Rimuovi la classe se non è più visibile (opzionale)
        }
      });
    });

    const sections = this.el.nativeElement.querySelectorAll('section');  // Seleziona tutte le sezioni
    console.log(sections);
    sections.forEach((section: any) => {
      observer.observe(section);  // Attiva l'osservatore per ciascuna sezione
    });
  }
}
