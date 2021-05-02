export class User {

    constructor(username='', password='', nombre='', apellidos='',email='', puntos=0, tutor=false){
        this.username = username;
        this.password = password;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.email = email;
        this.tutor = tutor;
        this.puntos=puntos;
    }
    username: string;
    password: string;
    nombre: string;
    apellidos: string;
    email: string;
    tutor: boolean;
    puntos:number
}
