const jwt = require('jsonwebtoken');

const jwtConfig = {
    algorithm: 'HS256',
};

const secret = process.env.JWT_SECRET;

const generateToken = (payload) => 
    jwt.sign(payload, secret, jwtConfig);

const validateToken = async (token) => {
        if (!token) {
            const err = new Error('Token not found');
            err.status = 401;
            throw err;
        }
    
        try {
            const instrospection = await jwt.verify(token, secret);
            return instrospection;
        } catch (e) {
            console.log('Err', e);
            const err = new Error('Expired or invalid token');
            err.status = 401;
            throw err;
        }        
    };

module.exports = {
    generateToken,
    validateToken,
};