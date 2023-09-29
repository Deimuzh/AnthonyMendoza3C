import { Empleado } from "./empleado";

export class Profesor extends Empleado {

    private _departamente:string;

    constructor(nombre:string = "", apellido:string = "" , ID:number =0 , estado:string = "",aniocorporacion:number = 0, despacho : number = 0,departamento:string = "",) {
        super(nombre,apellido,ID,estado,aniocorporacion,despacho )
        this._departamente = departamento;
    }

    CambiarDeDepartamento(departamento:string){
        this._departamente = departamento; 
    }
    public get departamento (): string{
        return this._departamente
    }
    toString(): string {
        return `El profesor ${this.nombre} ${this.apellido} ,
        cédula ${this.ID} está en el departamento de ${this.departamento}`;

    }
}