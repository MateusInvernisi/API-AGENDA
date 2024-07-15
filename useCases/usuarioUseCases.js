const { pool } = require('../config');
const Usuario = require('../entities/Usuario')

const getUsuariosDB = async () => {
    try {
        const { rows } = await pool.query(`SELECT * FROM usuarios ORDER BY nome`);
        return rows.map((usuario) => new Usuario(usuario.id, usuario.nome, usuario.email));
    } catch (err) {
        throw "Erro: " + err;
    }
}


const addUsuarioDB = async (body) => {
    try {
        const { nome, email, senha } = body;
        const results = await pool.query(`INSERT INTO usuarios (nome, email, senha) VALUES ($1, $2, $3)
        returning id, nome, email, senha`, [nome, email, senha]);
        const usuario = results.rows[0];
        return new Usuario(usuario.id, usuario.nome, usuario.email, usuario.senha);
    } catch (err) {
        throw "Erro ao inserir o usuario: " + err;
    }
}

const updateUsuarioDB = async (body) => {
    try {
        const { id, email } = body;        
        const results = await pool.query(`UPDATE usuarios set email = $2
        WHERE id = $1 returning id, email`, [id, email]);
        if (results.rowCount == 0) {
            throw `Nenhum registro encontrado com o código ${id} para ser alterado`;
        }
        const usuario = results.rows[0];
        return new Usuario(usuario.id, usuario.nome, usuario.email, usuario.senha);
    } catch (err) {
        throw "Erro ao alterar o usuario: " + err;
    }
}

const deleteUsuarioDB = async (codigo) => {
    try {
        const results = await pool.query(`DELETE FROM usuarios
        WHERE id = $1`, [codigo]);
        if (results.rowCount == 0) {
            throw `Nenhum registro encontrado com o código ${codigo} para ser removido`;
        } else {
            return `Usuario de código ${codigo} removida com sucesso!`;
        }
    } catch (err) {
        throw "Erro ao remover o usuario: " + err;
    }
}

const getUsuarioPorCodigoDB = async (codigo) => {
    try {
        const results = await pool.query(`SELECT * FROM usuarios
        WHERE id = $1`, [codigo]);
        if (results.rowCount == 0) {
            throw `Nenhum registro encontrado com o código ${codigo}`;
        } else {
            const usuario = results.rows[0];
            return new Usuario(usuario.id, usuario.nome, usuario.email);
        }
    } catch (err) {
        throw "Erro ao recuperar a usuario: " + err;
    }
}




module.exports = {
    getUsuariosDB, addUsuarioDB, updateUsuarioDB, deleteUsuarioDB, getUsuarioPorCodigoDB
}