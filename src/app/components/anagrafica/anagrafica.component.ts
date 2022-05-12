import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AnagraficaService } from './anagrafica.service';

@Component({
  selector: 'app-anagrafica',
  templateUrl: './anagrafica.component.html',
  styleUrls: ['./anagrafica.component.css']
})
export class AnagraficaComponent implements OnInit {

  constructor(
    private anagraficaService:AnagraficaService,
    private http:HttpClient
    ) { 
  }

  ngOnInit() {
  }

}