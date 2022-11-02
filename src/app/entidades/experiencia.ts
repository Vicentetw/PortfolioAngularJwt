export class Experiencia{
    id:number;
    nombre_experiencia:string;
    duracion_experiencia:string;
    descripcion_experiencia:string;
    persona_id:number;
     
    constructor(id:number, nombre_experiencia:string, duracion_experiencia:string, descripcion_experiencia:string, persona_id:number )
    { 
        this.id=id;
        this.nombre_experiencia=nombre_experiencia;
        this.duracion_experiencia=duracion_experiencia;
        this.descripcion_experiencia=descripcion_experiencia;
       this.persona_id=persona_id;
       
   

}
}