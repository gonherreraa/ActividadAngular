import { Component, Input } from '@angular/core';
import { ITarea } from 'src/app/shared/interface/itarea';


@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent {
  @Input() tareaAtr: ITarea;
  color: any = 'red';
  situacion: boolean = false;


  constructor() {
    this.tareaAtr = {
      nombre: "",
      detalle: "",
      horario: "",
      dia: "",
      estado:false
    }
  }


  actividadEstado(): void {
    
    this.tareaAtr.estado = !this.tareaAtr.estado;
    if(this.tareaAtr.estado==true){
      this.color='green';
      
    }else{
      this.color='red';
      
    }

    console.log(this.tareaAtr.estado)

  }
}
