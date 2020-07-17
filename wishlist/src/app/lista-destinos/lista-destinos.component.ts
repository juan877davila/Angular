import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DestinoViaje } from '../models/destino-viaje.model';
import { DestinosApiClient } from '../models/destino-api-clinet.model';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css'],
  providers: [ DestinosApiClient]
})
export class ListaDestinosComponent implements OnInit {
  @Output() onItemAdded: EventEmitter<DestinoViaje>;
  constructor(private destinosApiClient:DestinosApiClient) { 
    this.onItemAdded = new EventEmitter();
  }

  ngOnInit(): void {

  }

  agregado(d: DestinoViaje) {
    this.destinosApiClient.add(d);
    this.onItemAdded.emit(d);
    return false;
  }
  
  elegido(e: DestinoViaje) {
    this.destinosApiClient.getAll().forEach(x=> x.setSelected(false))
    e.setSelected(true);
  }

}

