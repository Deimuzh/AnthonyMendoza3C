export class Persona {
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
    public get nombre(): string {
        return this._nombre;
      }
    
      public get apellido(): string {
        return this._apellido;
      }
      public get ID(): number {
        return this._ID;
      }
    
      public get estado(): string {
        return this._estado;
      }
    
    cambiarEstadoCivil(estado: string) {
        this._estado = estado;
      }
      toString() {
        return `El estado civil del ciudadano 
        ${this.nombre} ${this.apellido} 
        de cédula ${this.ID} es: ${this.estado}`;
      }
}