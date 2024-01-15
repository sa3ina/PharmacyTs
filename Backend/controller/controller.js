const Data = require("../modules/testModule");

const getall = async (req, res) => {
  const posts = await Data.find();
  res.send(posts);
};
const getById = async (req, res) => {
  const posts = await Data.findOne({ id: req.params.id });
  res.send(posts);
};
const deleteById = async (req, res) => {
  await Data.deleteOne({ id: req.params.id });
  res.status(204).send();
};
const postElement = async (req, res) => {
  const newProduct = new Data(req.body);
  newProduct.save();
};
const patchElement = async (req, res) => {
  const posts = await Data.findOneAndUpdate({ id: req.params.id }, req.body);
  res.send(posts);
};
const putElement = async (req, res) => {
  const posts = await Data.replaceOne({ id: req.params.id }, req.body);
  res.send(posts);
};
module.exports = {
  getall,
  getById,
  deleteById,
  postElement,
  patchElement,
  putElement,
};
