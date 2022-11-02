export class Skill{
    id:number;
    nombre_skill:string;
    porcentaje_skill:number;
    persona_id:number;
     
    constructor(id:number, nombre_skill:string,porcentaje_skill:number,persona_id:number )
    { 
        this.id=id;
        this.nombre_skill=nombre_skill;
        this.porcentaje_skill=porcentaje_skill;
        this.persona_id=persona_id;
}
}