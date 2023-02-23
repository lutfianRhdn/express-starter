const {GetAllUsersRepository} = require("../repositories");

module.exports={
    getAllUsers: async (req, res) => {
        try {
            const users = await GetAllUsersRepository();
            return res.render("users", {users});
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }
}