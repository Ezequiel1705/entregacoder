class Usuario {
    constructor (nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName(){
        return this.nombre + this.apellido
    }

    addMascota(mascotas){
        this.mascotas.push(this.nMascotas);
    }

    countMascotas (){
        return this.mascotas.length
    }

    addBook(nombre, autor){
        this.libros.push({
            nombre: nLibro,
            autor: autorLibro
        })
    }

    getBookNames(){
        return (this.libros.map((libros) => this.libros.nombre))
    }

}

let usuario = new Usuario('Eze', 'Colicoy', [
]);

addBook(nLibro = "HA VUELTO", autorLibro = "Timur Vermes")
addMascota(nMascotas = 'pepe', 'toby');
