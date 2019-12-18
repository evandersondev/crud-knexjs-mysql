const routes = require("express").Router();
const PessoasController = require("./controllers/PessoasController");

routes.get("/pessoas", PessoasController.index);
routes.post("/pessoas/create", PessoasController.store);
routes.get("/pessoas/update/:id", PessoasController.update);
routes.post("/pessoas/update/:id", PessoasController.updateProccess);
routes.get("/pessoas/delete/:id", PessoasController.destroy);

routes.get("/pessoas/create", (req, res) => res.render("create"));
routes.get("/pessoas/update/:id", (req, res) => res.render("update"));
routes.get("/projetos", (req, res) => res.render("projetos"));

module.exports = routes;
