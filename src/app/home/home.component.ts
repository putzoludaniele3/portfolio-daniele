import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  dowloadCV(){
    const pdfUrl = 'assets/file/DANIELE-PUTZOLU-CV.pdf';
    const pdfName = 'DANIELE-PUTZOLU-CV.pdf'


    const a = document.createElement('a');
    a.href = pdfUrl;
    a.download = pdfName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

  }

  contactMe(){
    const email = 'putzoludaniele3@gmail.com';
    const subject = '';
    const body = '';
    
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoLink;
  }

}
