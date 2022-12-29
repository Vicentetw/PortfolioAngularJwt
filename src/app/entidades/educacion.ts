export class Educacion{
    id:number;
    
    titulo:string;
    institucion:string;
    fecha_egreso:string;
    fecha_inicio:string;
    persona_id:number;
    
        

   constructor(id:number, titulo:string, institucion:string,fecha_egreso:string,fecha_inicio:string, persona_id:number )
   { 
      this.id=id;
      this.titulo=titulo;
      this.institucion=institucion;
      this.fecha_egreso=fecha_egreso;
      this.fecha_inicio=fecha_inicio;
      this.persona_id=persona_id;
      
      
   }

}