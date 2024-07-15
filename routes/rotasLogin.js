const { Router } = require('express');
const { postUsuariaCadastrado } = require('../controllers/loginController');

const rotasLogins = new Router();

rotasLogins.route('/login')
               .post(postUsuariaCadastrado);

module.exports = {rotasLogins};