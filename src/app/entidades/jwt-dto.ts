export class JwtDto {
    token!: string;
    type!: string;
    userName!: string;
    authorities!: string[];


    constructor( token:string, type:string,userName:string,authorities:[])
   { 
      
      this.token=token;
      this.type=type;
      this.userName=userName;
      this.authorities=authorities;
      
   }
}
