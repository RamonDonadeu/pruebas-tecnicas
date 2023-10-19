import products from "../data/products.json" assert { type: "json" };

const getProductById = (id) => {
  console.log(id);
  return products.products.find((product) => product.id === id);
};

const getProductByQuery = (query) => {
  return products.products.filter((product) => {
    let found = false;
    for (const key in product) {
      if (typeof product[key] === "string" && product[key].includes(query)) {
        found = true;
        break;
      }
    }
    return found;
  });
};

export { getProductById, getProductByQuery };