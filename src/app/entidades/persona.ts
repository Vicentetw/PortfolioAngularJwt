export class Persona {
    id: number;
    nombre: string;
    apellido: string;
    dni: string;
    id_nacionalidad: number;
    id_experiencia: number;
    id_skill: number;
    id_proyectos: number;
    fecha_nacimiento: string;
    id_educacion: number;

    constructor(id: number, nombre: string, apellido: string, dni: string, id_nacionalidad: number, id_experiencia: number, id_skill: number, id_proyectos: number, fecha_nacimiento: string, id_educacion: number) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.id_nacionalidad = id_nacionalidad;
        this.id_experiencia = id_experiencia;
        this.id_skill = id_skill;
        this.id_proyectos = id_proyectos;
        this.fecha_nacimiento = fecha_nacimiento;
        this.id_educacion = id_educacion;
    }

}