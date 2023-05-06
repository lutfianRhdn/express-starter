const response = require("../../../utils/response");
const saveToCache = require("../../../utils/saveToCache");
const view = require("../../../utils/view");
const { GetAllUsersRepository, GetUserRepository } = require('../repositories');

module.exports={
    getAllUsers: async (req, res) => {
        try {
            const users = await GetAllUsersRepository();
            return view(res,'user', "index", { users });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    },
    getUser: async (req, res) => {
        try {
            const { id } = req.params;
            const redis = req.app.get('redis');
            const user = await GetUserRepository({ id });
            
            await saveToCache({ redis, key: `user_${id}`, data: user });
            return response({ res, data: user,code:200, message: "success" })
        } catch (error) {
            console.error(error)
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    },
}