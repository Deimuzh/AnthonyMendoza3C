import { Empleado } from "./Empleado";
import { Estudiante } from "./Estudiante";
import { Persona } from "./Persona";
import { PersonalDeServicio } from "./PersonalDeServicio"
import { Profesor } from "./Profesor";

const persona = new Persona("Alex", "Mercer", 123456789, "soltero");
const estudiante = new Estudiante("Alex", "Mercer", 123456789, "soltero");
const empleado = new Empleado("Alex", "Mercer", 123456789, "soltero", 2003, 4);
const profesor = new Profesor("Alex", "Mercer", 123456789, "soltero", 2001, 2, "Idiomas");
const personalDeServicio = new PersonalDeServicio("Alex", "Mercer", 123456789, "soltero", 2000, 5, "Ciencia");

console.log(persona.toString());
persona.cambiarEstadoCivil("casado")
console.log(persona.toString());
persona.cambiarEstadoCivil("viudo")
console.log(persona.toString());
persona.cambiarEstadoCivil("soltero")
console.log(persona.toString());
persona.cambiarEstadoCivil("union libre")
console.log(persona.toString());
persona.cambiarEstadoCivil("muerto")
console.log(persona.toString());

console.log(empleado.toString());
empleado.reasignarDespacho(10);
console.log(empleado.toString());

console.log(profesor.toString());
profesor.CambiarDeDepartamento("Literatura")
console.log(profesor.toString());

console.log(personalDeServicio.toString());
personalDeServicio.trasladar("Sala de Computo")
console.log(personalDeServicio.toString());
