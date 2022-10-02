const { User } = require('../models');
const { generateToken } = require('../utils/JWT');

const findUser = async ({ email }) => {
  const user = await User.findOne({
    where: { email },
});
  return user;
};

const createUser = async ({ displayName, email, password, image }) => {
  const newUser = await findUser({ email });
  console.log('usuario', newUser);
  
  if (newUser) {
    const err = new Error('User already registered');
    err.status = 409;
    throw err;
  }
  
  const result = await User.create({ displayName, email, password, image });
  console.log('novo usuário service', result);

  const payload = {
    id: result.dataValues.id,
    displayName: result.dataValues.displayName,
    email: result.dataValues.email,
};
  const token = generateToken(payload);
  console.log('gerando token service', token);

  return token;
};

const findAllUsers = async () => {
  const allUsers = await User.findAll({
      attributes: { exclude: ['password'] },
  });
  return allUsers;
};

const findUserById = async (id) => {
  const userId = await User.findOne({
    attributes: { exclude: ['password'] },
    where: { id },
  });

  if (!userId) {
    const err = new Error('User does not exist');
    err.status = 404;
    throw err;
  }

  return userId;
};

module.exports = {
  createUser,
  findAllUsers,
  findUserById,
};