class Evento {
    constructor( id, titulo, data_hora, descricao, usuario_id ){
        this.id = id;
        this.titulo = titulo;
        this.data_hora = data_hora;
        this.descricao = descricao;
        this.usuario_id = usuario_id;
    }
}

module.exports = Evento;