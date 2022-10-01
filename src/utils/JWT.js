const jwt = require('jsonwebtoken');

const jwtConfig = {
    algorithm: 'HS256',
};

const secret = process.env.JWT_SECRET;

const generateToken = (payload) => 
    jwt.sign(payload, secret, jwtConfig);

module.exports = {
    generateToken,
};