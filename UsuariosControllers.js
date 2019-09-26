const Usuarios = require("../models/Usuarios");
module.exports = {
  async store(req, res) {
    const usuario = await Usuarios.create(req.body);
    return res.json(usuario);
  },
  
  async index(req,  res) {
    const usuario = await Usuarios.findOne({ _id: req.params.id });
    return res.json(usuario);
  }
};
