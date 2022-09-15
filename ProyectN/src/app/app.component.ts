import { Component, Input, OnInit, Output} from '@angular/core';
import {Pipe} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//DECLARACION DE VARIALES Y ARRAYS
export class AppComponent {
  //CONTENEDORES DE LAS TAREAS, PRINCIPAL Y PARA SEPARARLAS POR COMPLETAS Y PENDIENTES
  public todoArray:any=[];
  public tareaCompleta:any=[];
  public tareaPendiente:any=[];
  ///////////////////////////////////////
  //VARIABLE PARA VERIFICAR SI ALGUNA TAREA YA ESTA COMPLETA Y SE TRATA DE COMPLETAR NUEVAMENTE PARA QUE NO HAYA DUPLICADO
  public check:any;
  //AUXILIAR PARA VERIFICAR QUE SI SE VA A MODIFICAR ALGUN ITEM
  vmodificar:any=0;
  //GUARDA EL ITEM QUE SE VA A MODIFICAR PARA COMPARARLO CON LOS ARRAYS Y DE ESA FORMA MODIFICAR EL CORRECTO
  public modTarea:any=0;
  //GUARDA LA FECHA EN QUE LAS TAREAS SE ACOMPLETAN, ES EL PRIMER EXTRA
  public fechaCompleta:any=[];
  //FUNCION PARA GUARDAR UNA TAREA, ES LLAMADA POR UN ITEM DE UN SPAN QUE FUNCIONARIA COMO BOTON
  guardarTarea(value:any){
    if(value !=="" && value!=="-"){
      this.todoArray.push(value);
      this.tareaPendiente.push(value);
      console.log(this.todoArray);
    }else{
      alert('El campo tarea es requerido.')
    }
  }
  //FUNCION PARA BORRAR EL ITEM DESEADO, BORRA LOS ITEM DE LA LISTA PRINCIPAL Y DE LAS DOS CLASIFICACIONES(COMPLETAS Y PENDIENTES), SEGUNDO EXTRA QUE AGREGUE
  borrarTarea(item:any){
    for(let i=0; i <= this.todoArray.length; i++){
      if(item == this.todoArray[i]){
        this.todoArray.splice(i,1);
      }
      if(item == this.tareaCompleta[i]){
        this.tareaCompleta.splice(i,1);
        this.fechaCompleta.splice(i,1);
      }
      if(item == this.tareaPendiente[i]){
        this.tareaPendiente.splice(i,1);
      }
    }
  }
  //FUNCION PARA ACOMPLETAR UNA TAREA, PASA DE TAREA PENDIENTES A TAREAS COMPLETAS Y LES AGREGA LA FECHA EN QUE FUE COMPLETADA
  Completar(item:any){
    this.check=0;
    if(this.tareaCompleta){
      for(let i=0;i<=this.tareaCompleta.length;i++){
        if(item==this.tareaCompleta[i]){
          this.check=1;
        }
      }
      if(this.check!==1){
        this.tareaCompleta.push(item);
        this.fechaCompleta.push(Date.now());
      }
    }else{
      this.tareaCompleta.push(item);
    }
    for(let i=0;i<=this.tareaPendiente.length;i++){
      if(item==this.tareaPendiente[i]){
        this.tareaPendiente.splice(i,1);
        i=this.tareaPendiente.length+1;
      }
    }
  }
 //FUNCION PARA CAMBIAR VALOR DE vmodificar PARA LUEGO SER EVALUADA Y ENTRAR A LA OPCION DE MODIFICAR ITEMS
  modificar(item:any){
    this.vmodificar=1;
    this.modTarea=item;
  }
  //FUNCION QUE MODIFICA EL VALOR DE LOS ITEMS UNA VEZ ESTANDOD ENTRO DE LA OPCION DE MODIFICAR, EN ESTA FUNCION SE MODIFICA DE LA LISTA PRINCIPAL Y DE LAS LISTAS PENDIENTES Y COMPLETAS
  modificarTodo(value:any){
    for(let i=0;i<=this.todoArray.length;i++){
      if(value!==""&&value!=="-"){
        if(this.modTarea==this.todoArray[i]){
          this.todoArray[i]=value;
        }
        if(this.modTarea==this.tareaPendiente[i]){
          this.tareaPendiente[i]=value;
        }
        if(this.modTarea==this.tareaCompleta[i]){
          this.tareaCompleta[i]=value;
        }
      }else{
        alert("El campo Modificar Tarea es requerido");
      }
      this.vmodificar =0;
    }
  }
}






