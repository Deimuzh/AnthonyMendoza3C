// Esto fue practica//
/*
class persona {
    private _nombre:string;
    private _apellido:string;
    private _ID:number;
    private _estado:string;
    
    constructor(nombre:string = "", apellido:string = "" , ID:number =0 , estado:string = "") {

        this._nombre = nombre;
        this._apellido = apellido;
        this._ID = ID
        this._estado = estado;        
    }
    cambiarEstadoCivil(estado: string) {
        this._estado = estado;
      }
      toString() {
        return `El estado civil del ciudadano 
        ${this._nombre} ${this._apellido} 
        de cédula ${this._ID} es: ${this._estado}`;
      }
}

class Estudiante extends persona{
  
    private _curso:number;

    constructor(nombre:string = "", apellido:string = "" , ID:number =0 , estado:string = "",curso:number =0) {
        super(nombre,apellido,ID,estado)
        this._curso = curso;
    }
    cambiarMatricula(curso:number) {
        this._curso = curso;
    }
    
    toString(): string {
        return `El estudiante ${this.nombre} ${this.apellido} de cédula ${this.ci} está cursando el ${this.curso} curso`;

    }

}

class Empleado extends persona{
  
    private _aniocorporacion:number;
    private _despacho : number;

    constructor(nombre:string = "", apellido:string = "" , ID:number =0 , estado:string = "",aniocorporacion:number = 0, despacho : number = 0) {
        super(nombre,apellido,ID,estado)
        this._aniocorporacion = aniocorporacion;
        this._despacho = despacho;
    }

    reasignarDespacho(despacho:number) {
        this._despacho = despacho;
    }
    
    toString() {String}

}

class Profesor extends Empleado {

    private _departamente:string;

    constructor(nombre:string = "", apellido:string = "" , ID:number =0 , estado:string = "",aniocorporacion:number = 0, despacho : number = 0,departamento:string = "",) {
        super(nombre,apellido,ID,estado,aniocorporacion,despacho )
        this._departamente = departamento;
    }

    CambiarDeDepartamento(departamento:string){
        this._departamente = departamento;
    }
    toString() {String}
}

class PersonalDeServicio extends Empleado {
    
    private _seccion : string
    constructor(nombre:string = "", apellido:string = "" , ID:number = 0 , estado:string = "",aniocorporacion:number = 0, despacho : number = 0, seccion:string ="") {
        super(nombre,apellido,ID,estado,aniocorporacion,despacho)
        this._seccion = seccion;
    } 
    trasladar (seccion:string){
        this._seccion = seccion;
    }
    toString(){String}

}
*/
