import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {
    const faders = document.querySelectorAll('.fade-in-section');
    const options = {
      threshold: 0.1
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });
  }


}
