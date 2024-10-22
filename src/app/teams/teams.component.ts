import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements AfterViewInit {


  teams = [
    { name: 'Reale Mutua', ref: 'https://www.realemutua.it/', description: 'Team di sviluppo evolutive e correzione batch', notes: 'Ho lavorato in un team Agile di 13 persone, partecipando ogni giorno a una riunione mattutina con analisti, tester, sviluppatori e lo Scrum Master. Collaboravo strettamente con analisti e tester per raccogliere informazioni sul funzionamento attuale del software e identificare miglioramenti o nuove funzionalità da introdurre, grazie al contributo del team' },
    { name: 'Unipol Move', ref: 'https://www.unipolmove.it/', description: 'Team di sviluppo evolutive, test e bug fixing', notes: 'Ho lavorato all´interno di un team composto solo da me e dalla mia Team Leader. Ogni settimana venivano assegnati vari task con scadenze precise, che ho sempre rispettato, gestendo il lavoro in multitasking'},
    { name: 'Mercdes-Benz', ref: 'https://www.mercedes-benz.com/', description: 'Team di sviluppo e test', notes: 'Ho operato in un contesto internazionale all´interno di un team composto da oltre 30 persone, tra tester e sviluppatori, con l´obiettivo di sviluppare funzionalità mirate a garantire la migliore esperienza utente possibile. Ho presentato soluzioni e proposte di miglioramento precise e ben strutturate, assicurandomi che nessun bug venisse rilasciato in produzione. Tutto il lavoro è stato condotto in lingua inglese e, talvolta, in tedesco', link: 'href="https://github.com/your-profile/project3"' }
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
