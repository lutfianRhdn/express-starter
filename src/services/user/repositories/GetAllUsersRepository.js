const {Users} = require('../../../utils/database')

module.exports= async () => {
    const users = await Users.findMany();
    return users;
}
