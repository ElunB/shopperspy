// Bring the express server and create application
let express = require("express");
let app = express();

let productController = require("./productController");

//use the express Router object
let router = express.Router();

//Create GET to return a product/all products
//"If you go here, this functon is executed"
//All of these functions for a router typically havae a request object, a response object and a next object (req, res, next)
// next is what we are going to use for middleware error handling
router.get("/", function (req, res, next) {
  //res.send(products);
  const products = productController.get();
  res.status(200).json({
    status: 200,
    statusText: "OK",
    message: "All products retrieved",
    data: products,
  });
});

// /:id variabel som mappas till id
router.get("/:id", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  productController.getById(req.params.id, function (data) {
    if (data) {
      res.status(200).json({
        status: 200,
        statusText: "OK",
        message: "All products retrieved",
        data: data,
      });
    } else {
      res.status(404).json({
        status: 404,
        statusText: "Not found",
        message:
          '"The products with id:" + req.params.id + "could not be found"',
        error: {
          code: "NOT_FOUND",
          message:
            '"The products with id:" + req.params.id + "could not be found"',
        },
      });
    }
  });
});

// Configure router so all routes are prefixed with /api/v1
// All endpoints goes through /api/...
app.use("/api", router);

//Create server to listen on port 5000
var server = app.listen(3001, function () {
  console.log("Node server is running on http://localhost:3001..");
});

module.exports = router;
