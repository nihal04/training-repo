let products = [
  { id: 1, name: "Laptop", brand: "Dell", quantity: 5, price: 35000 },
  { id: 2, name: "Camera", brand: "Canon", quantity: 7, price: 65000 },
];

function AddProduct(req, res) {
  products.push(req.body);
  res.status(201).send({ status: 201, message: "Product added successfully" });
}

function GetProducts(req, res) {
  res.status(200).send(products);
}

function GetProduct(req, res) {
  res.status(200).send(products.find((x) => x.id == req.params.id));
}

function DeleteProduct(req, res) {
  products = products.filter((x) => x.id != req.params.id);
  res
    .status(200)
    .send({ status: 200, message: "Product deleted successfully" });
}

function GetProductDetails(req, res){
    console.log(req.query);
    res.send('ok');
}

module.exports = { AddProduct, GetProducts, GetProduct, DeleteProduct, GetProductDetails };
