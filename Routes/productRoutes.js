const productController = require("../Controllers/productController");

const router = require("express").Router();

// add product
router.post("/addProduct", productController.addProduct);

// get all products
router.get("/allProducts", productController.getAllProducts);

// get published products
router.get("/published", productController.getPublishedProduct);

// get single product
router.get("/:id", productController.getOneProduct);

// update single product
router.put("/:id", productController.updateProduct);

// delete single product
router.delete("/:id", productController.deleteProduct);

module.exports = router;
