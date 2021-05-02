export class User {

    constructor(username='', password='', nombre='', apellidos='',email='', tutor=false){
        this.username = username;
        this.password = password;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.email = email;
        this.tutor = tutor;
    }
    username: string;
    password: string;
    nombre: string;
    apellidos: string;
    email: string;
    tutor: boolean;
}
