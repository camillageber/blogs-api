const { User } = require('../models');
const { generateToken } = require('../utils/JWT');

const findUser = async ({ email, password }) => {
  const user = await User.findOne({
    attributes: ['id', 'email', 'displayName'],
    where: { email, password },
});
  return user;
};

const authentication = async ({ email, password }) => {
  const user = findUser({ email, password });

  const payload = {
    id: user.dataValues.id,
    displayName: user.dataValues.displayName,
    email: user.dataValues.email,
};

const token = generateToken(payload);

console.log(token);

  if (!user || user.password !== password) {
    const err = new Error('Invalid fields');
    err.status = 400;
    throw err;
  }
        
    return token;
};

module.exports = {
    authentication,
};