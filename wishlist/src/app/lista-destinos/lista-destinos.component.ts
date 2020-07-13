import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DestinoViaje } from '../models/destino-viaje.model';
import { DestinosApiClient } from '../models/destino-api-clinet.model';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {
  @Output() onItemAdded: EventEmitter<DestinoViaje>;
  constructor(private DestinosApiClient) { 
    this.onItemAdded = new EventEmitter();
  }

  ngOnInit(): void {

  }

  agregado(d: DestinoViaje) {
    this.DestinosApiClient.add(d);
    this.onItemAdded.emit(d);
  }
  
  elegido(d: DestinoViaje) {
    this.DestinosApiClient.getAll().forEach(x=> x.setSelected(false))
    d.setSelected(true);
  }

}

