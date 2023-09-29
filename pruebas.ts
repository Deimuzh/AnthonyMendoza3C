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
}

class Estudiante extends persona{
  
    private _curso:number;

    constructor(nombre:string = "", apellido:string = "" , ID:number =0 , estado:string = "",curso:number =0) {
        super(nombre,apellido,ID,estado)
        this._curso = curso;
    }

    /**
     * cambiarMatricula
     */
    cambiarMatricula(curso:number) {
        this._curso = curso;
    }
    
    toString() {String}

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