const User = require("../models/User");
const Spot = require("../models/Spot");

module.exports = {
  async index(request, response) {
    const { tech } = request.query;
    const spots = await Spot.find({ techs: tech });

    return response.json(spots);
  },

  async store(request, response) {
    const { user_id } = request.headers;
    const user = await User.findById(user_id);
    if (!user) {
      return response.status(400).json({ error: "User doesn't exists" });
    }

    const { filename } = request.file;
    const { company, techs, price } = request.body;

    const spot = await Spot.create({
      user: user_id,
      thumbnail: filename,
      techs: techs.split(",").map(tech => tech.trim()),
      company,
      price
    });

    return response.json(spot);
  }
};
