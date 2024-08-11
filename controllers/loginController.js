const { autenticaUsuarioDB } = require('../usecases/LoginsUseCases');
require('dotenv-safe').config();
const jwt = require('jsonwebtoken');

const login = async (request, response) => {
    try {
        const usuario = await autenticaUsuarioDB(request.body);
        const token = jwt.sign({ usuario: { id: usuario.id, nome: usuario.nome, email: usuario.email } }, process.env.SECRET, {
            expiresIn: 300 // Expira em 5 minutos
        });
        response.json({ auth: true, token });
    } catch (err) {
        response.status(401).json({ auth: false, message: err });
    }
}

function verificaJWT(request, response, next) {
    const token = request.headers['authorization'];

    if (!token) {
        return response.status(401).json({ auth: false, message: 'Nenhum token recebido.' });
    }

    // Remove "Bearer " do token se presente
    const tokenSemBearer = token.startsWith('Bearer ') ? token.slice(7, token.length) : token;

    jwt.verify(tokenSemBearer, process.env.SECRET, (err, decoded) => {
        if (err) return response.status(401).json({ auth: false, message: 'Erro ao autenticar o token.' });
        request.usuario = decoded.usuario;
        next();
    });
}



module.exports = { login, verificaJWT };
