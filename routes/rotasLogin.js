const { Router } = require('express');
const { login } = require('../controllers/loginController');

const rotasLogins = new Router();

rotasLogins.route('/login')
               .post(login);

module.exports = {rotasLogins};