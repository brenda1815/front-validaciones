import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  public inventario: any = [
    { id: 1, nombre: "pantalon", precio: 258 },
    { id: 2, nombre: "chamarra", precio: 500 }
  ];

  public formulario: any = {
    createForm() {
      return new FormGroup({
        id: new FormControl('', [Validators.required]),
        nombre: new FormControl('', [Validators.required]),
        precio: new FormControl('', [Validators.required])
      });
    }
  }
  public seleccionar(articulos: any): void {
    this.formulario.id = articulos.id;
    this.formulario.nombre = articulos.nombre;
    this.formulario.precio = articulos.precio;
  }
  public eliminar(id: number): void {
    for (let index = 0; index < this.inventario.lenght; index++) {
      if (this.inventario[index].id == id) {
        this.inventario.splice(index, 1);
        alert("eliminado con exito");
        break;
      }
    }
  }
  public agregar(): void {
    let datoNuevo = {
      id: this.formulario.id,
      nombre: this.formulario.nombre,
      precio: this.formulario.precio
    };
    if (this.formulario.id == null || this.formulario.nombre == null || this.formulario.precio == null) {
      alert("no puede estar el campo vacio");
      return;
    }
    for (let index = 0; index < this.inventario.lenght; index++) {
      if (this.inventario[index].id == this.formulario.id) {
        alert("Ya existe el id");
        return;
      }

    }
    this.inventario.push(datoNuevo);
    alert("agregado con exito");
  }
  public editar(): void {
    // console.log(this.formulario);

    // for(let index=0; index< this.inventario.lenght;index++){
    //   if(this.inventario[index].id==this.formulario.id){
    //     this.inventario[index].id=this.formulario.id;
    //     this.inventario[index].nombre=this.formulario.nombre;
    //     this.inventario[index].precio=this.formulario.precio;
    //     alert("Modificado con exito");
    //     console.log(index);
    //     break;
    //  }
    // }
        
    this.inventario[this.formulario.id - 1].nombre = this.formulario.nombre
    
    
    
  }

}