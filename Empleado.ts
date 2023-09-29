import { Persona } from "./Persona";

export class Empleado extends Persona{
  
    private _aniocorporacion:number;
    private _despacho : number;

    constructor(nombre:string = "", apellido:string = "" , ID:number =0 , estado:string = "",aniocorporacion:number = 0, despacho : number = 0) {
        super(nombre,apellido,ID,estado)
        this._aniocorporacion = aniocorporacion;
        this._despacho = despacho;
    }

    public get despacho(): number {
        return this._despacho;
      }

    reasignarDespacho(despacho:number) {
        this._despacho = despacho;
    }
    
    toString(): string {
        return `El empleado ${this.nombre} ${this.apellido} 
        de cédula ${this.ID} está en el despacho ${this.despacho}`;

    }

}