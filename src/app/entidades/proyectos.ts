export class Proyectos{
    id:number;
    nombre_proyecto:string;
    descripcion_proyecto:string;
    persona_id:number;
     
    constructor(id:number, nombre_proyecto:string,descripcion_proyecto:string,persona_id:number )
    { 
        this.id=id;
        this.nombre_proyecto=nombre_proyecto;
        this.descripcion_proyecto=descripcion_proyecto;
        this.persona_id=persona_id;
}
}