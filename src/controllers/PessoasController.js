const db = require("../config/db");

module.exports = {
  async index(req, res) {
    const pessoas = await db("pessoas").select("*");
    res.render("index", { pessoas });
  },

  async store(req, res) {
    const { nome, nascimento, cargo } = req.body;
    await db("pessoas").insert({ nome, nascimento, cargo });

    res.redirect("/pessoas");
  },

  async update(req, res) {
    const id = req.params.id;
    const pessoa = await db("pessoas")
      .where({ id })
      .select("*");

    if (pessoa.length > 0) {
      res.render("update", { pessoa: pessoa[0] });
    } else {
      res.render("update", {});
    }
  },
  async updateProccess(req, res) {
    const id = req.params.id;
    const { nome, nascimento, cargo } = req.body;

    await db("pessoas")
      .where({ id })
      .update({ nome, nascimento, cargo });

    res.redirect("/pessoas");
  },

  async destroy(req, res) {
    await db("pessoas")
      .where({ id: req.params.id })
      .del();

    res.redirect("/pessoas");
  }
};
