import { Empleado } from "./Empleado";

export class PersonalDeServicio extends Empleado {
    
    private _seccion : string
    constructor(nombre:string = "", apellido:string = "" , ID:number = 0 , estado:string = "",aniocorporacion:number = 0, despacho : number = 0, seccion:string ="") {
        super(nombre,apellido,ID,estado,aniocorporacion,despacho)
        this._seccion = seccion;
    } 
    trasladar (seccion:string){
        this._seccion = seccion;
    }
    public get seccion (): string{
        return this._seccion
    }
    
    toString(): string {
        return `El personal de servicio ${this.nombre} ${this.apellido}
        de cédula ${this.ID} 
        se encuentra en la sección de ${this.seccion}`;

    }

}
