export class Educacion{
    id:number;
    fecha_inicio:string;
    fecha_egreso:string;
    titulo:string;
    institucion:string;
    persona_id:number;
    
        

   constructor(id:number, fecha_inicio:string, fecha_egreso:string, titulo:string, institucion:string, persona_id:number )
   { 
       this.id=id;
       this.fecha_inicio=fecha_inicio;
       this.fecha_egreso=fecha_egreso;
       this.titulo=titulo;
      this.institucion=institucion;
      this.persona_id=persona_id;
      
      
   }

}