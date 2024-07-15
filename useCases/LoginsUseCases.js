const { pool } = require('../config');
const Usuario = require('../entities/Usuario')

const verificarUsuarioCadastrado = async (email, senha) => {
    try {
        const results = await pool.query(`SELECT * FROM usuarios WHERE email = $1 AND senha = $2`, [email, senha]);
        if (results.rows.length > 0) {
            // Se encontrou um usuário com o email e senha fornecidos, retorna o objeto do usuário
            const usuario = results.rows[0];
            return new Usuario(usuario.email, usuario.senha);
        } else {
            // Se não encontrou nenhum usuário correspondente, retorna null
            return null;
        }
    } catch (err) {
        throw new Error("Erro ao verificar usuário cadastrado: " + err.message);
    }
}

module.exports = { verificarUsuarioCadastrado };
