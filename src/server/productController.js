const fetch = require("node-fetch");

let productController = {
  get: function () {
    return [{ id: 1, name: "dress" }];
  },
  getById: async function (id) {
    try {
      const promise = await fetch(
        "https://asos2.p.rapidapi.com/products/detail/",
        {
          method: "GET",
          params: { id: id },
          headers: {
            "x-rapidapi-key":
              "b185780084msh992016afbdb58b2p1bbd2bjsnda73a1ef68f8",
            "x-rapidapi-host": "asos2.p.rapidapi.com",
          },
        }
      );
      if (promise.ok) {
        const data = await promise.text();
        console.log(data);
        return promise.data;
      } else {
        console.log(promise.data);
        throw promise;
      }
    } catch (e) {
      console.log(e);
    }
  },
};

module.exports = productController;
