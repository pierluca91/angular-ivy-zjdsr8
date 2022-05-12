import { Component, OnInit, VERSION } from '@angular/core';
import { AnagraficaComponent } from './components/anagrafica/anagrafica.component';
import { AnagraficaService } from './components/anagrafica/anagrafica.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  constructor(private anagraficaService: AnagraficaService) {}

  ngOnInit(): void {
    console.log('ciao')
  }
}
