const { Player, Salary } = require("../db/models");

class StorageService {
    getPlayers = () => Player.findAll();

    getPlayer = async (player_id) => {
        //TODO 1: Use Player sequelize model to retrieve the specific player

        return await Player.findByPk(player_id);
    };

    createPlayer = async (player) => {
        Player.create(player);
        //TODO 2: Use Player sequelize model to create a player
    };

    createSalary = async (salary) => {
        Salary.create(salary);
        //TODO 4: Use Salary sequelize model to create a salary
    };

    getSalary = async (salary_id) => {
        return Salary.findByPk(salary_id, { include: Player });
        //TODO 5: Use Salary sequelize model to get salary
    };
}

module.exports = new StorageService();
