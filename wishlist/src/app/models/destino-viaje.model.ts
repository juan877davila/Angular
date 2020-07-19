import { v4 as uuid } from 'uuid';

export class DestinoViaje{
    selected: boolean;
    servicios: string[];
    id = uuid();
    public votes = 0;

    constructor(public nombre: string, public url: string){
        this.servicios=['piscina', 'desayuno'];
    }
    isSelected():boolean{
        return this.selected;
    }
    setSelected(s: boolean){
        this.selected = s;
    }
    voteUp(): any {
        this.votes++;
    }
    voteDown(): any {
        this.votes--;
    }
}
