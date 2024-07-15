const { verificarUsuarioCadastrado } = require('../useCases/LoginsUseCases');

const postUsuariaCadastrado = async (request, response) => {
    const { email, senha } = request.body; 

        try {
            const usuario = await verificarUsuarioCadastrado(email, senha)
            if (usuario){
                response.status(200).json({status : "success", message : "Login bem-sucedido!"});
            } else {
                response.status(400).json({status: 'error', message: "Credenciais Inválidas"})
            }

        } catch (e){
                response.status(500).json({
                status : 'error',
                message : err})
        }

}

module.exports = { postUsuariaCadastrado };
