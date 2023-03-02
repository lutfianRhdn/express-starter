const view = require("../../../utils/view");
const {GetAllUsersRepository} = require("../repositories");

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
    }
}