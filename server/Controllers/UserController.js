const { user } = require("../models");

class UserController {
  static async getAll(req, res) {
    try {
      const result = await user.findAll();
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  }
  static async createUser(req, res) {
    try {
      const { nip, nama, password } = req.body;

      let result = await user.create({
        nip,
        nama,
        password,
      });

      res.json(result);
    } catch (err) {
      res.json(err);
    }
  }
  static async updateUser(req, res) {
    try {
      const id = Number(req.params.id);
      const { nip, nama, password } = req.body;

      let result = await user.update(
        {
          nip,
          nama,
          password,
        },
        { where: { id } }
      );

      result[0] === 1
        ? res.json({
            message: `Data of Vaccine with the id of ${id} has been updated!`,
          })
        : res.json({
            message: `Data of Vaccine with the id of ${id} has not been updated!`,
          });
    } catch (err) {
      res.json(err);
    }
  }
  static async deleteUser(req, res) {
    try {
      const id = Number(req.params.id);
      let result = await user.destroy({
        where: { id },
      });
      result[0] === 1
        ? res.json({
            message: `Data of Vaccine with the id of ${id} has not been deleted!`,
          })
        : res.json({
            message: `Data of Vaccine with the id of ${id} has been deleted!`,
          });
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = UserController;
