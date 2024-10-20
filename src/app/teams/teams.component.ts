import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements AfterViewInit {


  teams = [
    { name: 'Team A', description: 'Team di sviluppo software' },
    { name: 'Team B', description: 'Team di marketing' },
    { name: 'Team C', description: 'Team di design' }
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
