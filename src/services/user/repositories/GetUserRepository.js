const { users: UsersModel } = require('../../../utils/database');

module.exports = async (params) => {
  const { id } = params;
  
  const users = await UsersModel.findFirstOrThrow({where: {id:+id}});
  return users;
};
