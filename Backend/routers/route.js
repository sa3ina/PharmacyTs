const express = require("express");
const router = express.Router();
const Controller = require("../controller/controller");
router.get("/products", Controller.getall);
router.get("/products/:id", Controller.getById);
router.delete("/products/:id", Controller.deleteById);
router.post("/products", Controller.postElement);
router.patch("/products/:id", Controller.patchElement);
router.put("/products/:id", Controller.putElement);

module.exports = router;
