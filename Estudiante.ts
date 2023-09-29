import { Persona } from "./Persona";

export class Estudiante extends Persona{
  
    private _curso:number;

    constructor(nombre:string = "", apellido:string = "" , ID:number =0 , estado:string = "",curso:number =0) {
        super(nombre,apellido,ID,estado)
        this._curso = curso;
    }

    cambiarMatricula(curso:number) {
        this._curso = curso;
    }
    
    toString(): string {
        return `El estudiante ${this.nombre} ${this.apellido},  
        cédula ${this.ID} está en el nivel ${this._curso} curso`;

    }

}