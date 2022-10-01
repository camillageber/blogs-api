const jwt = require('jsonwebtoken');

const jwtConfig = {
    algorithm: 'HS256',
};

const { JWT_SECRET } = process.env.JWT_SECRET;

const generateToken = (payload) => 
    jwt.sign(payload, JWT_SECRET, jwtConfig);

module.exports = {
    generateToken,
};