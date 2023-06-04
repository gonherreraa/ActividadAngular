import { Component } from '@angular/core';
import { ITarea } from 'src/app/shared/interface/itarea';

@Component({
  selector: 'app-mi-listado',
  templateUrl: './mi-listado.component.html',
  styleUrls: ['./mi-listado.component.css']
})
export class MiListadoComponent {
  listadoTareas: ITarea[] = [];

  actividad: string = "";
  desarrollo: string = "";
  fecha: string = "";
  hora: string = "";
  estado: boolean = false;
  color: any = '';
  anadirTarea: boolean = false;
  objetoRecuperado: any = "";
  tareasHechas: ITarea[] = [];
  tareasSinHacer: ITarea[] = [];
  mostrarDoc:boolean=false;

  crearTareas(): void {
    this.anadirTarea = !this.anadirTarea;

  }


  guardarEntrada(): void {

    localStorage.setItem("Tareas", JSON.stringify(this.listadoTareas));
    console.log(this.listadoTareas)

    let persona = localStorage.getItem("Tareas");

    console.log(persona);
  }


  masTareas(): void {

    if (this.actividad == '' && this.desarrollo == '' && this.fecha == '' && this.hora == '') {
      alert('Completa todos los campos');
    } else {
      this.listadoTareas.push({
        nombre: this.actividad, detalle: this.desarrollo, horario: this.fecha, dia: this.hora, estado: this.estado,
      })

      this.listadoTareas.sort((a, b) => {
        const diaA = a.horario;
        const diaB = b.horario;

        if (diaA < diaB) {
          return -1;
        }
        if (diaA > diaB) {
          return 1;
        }

        return 0;
      });


      if (this.estado == false) {
        this.tareasSinHacer.push({
          nombre: this.actividad, detalle: this.desarrollo, horario: this.fecha, dia: this.hora, estado: this.estado,
        });
        console.log(this.tareasSinHacer)
      }

      else {
        this.tareasHechas.push({
          nombre: this.actividad, detalle: this.desarrollo, horario: this.fecha, dia: this.hora, estado: this.estado,
        });

        console.log(this.tareasHechas);
      }


    }


    this.actividad = "";
    this.desarrollo = "";
    this.fecha = "";
    this.hora = "";
  }

  menosTareas(tarea: ITarea): void {

    var indice = this.listadoTareas.indexOf(tarea);
    if (indice > -1) {
      this.listadoTareas.splice(indice, 1);
    }

  }


  mostrarTareas(tarea: string): void {

    alert(`La tarea seleccionada es ${tarea}`)

  }


  documentacion():void{
    this.mostrarDoc = ! this.mostrarDoc;
  }


}
