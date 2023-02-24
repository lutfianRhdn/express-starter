const {users:UsersModel} = require('../../../utils/database')

module.exports= async () => {
    const users = await UsersModel.findMany();
    return users;
}
