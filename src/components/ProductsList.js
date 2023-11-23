import Product from "./Product";
import ShoppingCart from "./ShoppingCart";
import { useState } from "react";
import { useEffect } from "react";

export default function ProductsList() {
  const [products, setProducts] = useState([]);
  const [shoppingList, setShoppingList] = useState([]);
  const [showShoppingCart, setShowShoppingCart] = useState(false);
  function getProducts() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }
  useEffect(() => {
    // code to run after render goes here
    console.log("component rendered");
    getProducts();
  }, []);
  function add(product) {
    let shoppingListCopy = [...shoppingList];
    shoppingListCopy.push(product);
    setShoppingList(shoppingListCopy);
  }
  function remove(product) {
    let shoppingListCopy = [...shoppingList];
    shoppingListCopy = shoppingListCopy.filter(function (item) {
      return item.title != product.title;
    });
    setShoppingList(shoppingListCopy);
  }
  return (
    <>
      <nav className="mt-14">
        <div>
          <img
            onClick={() =>
              showShoppingCart
                ? setShowShoppingCart(false)
                : setShowShoppingCart(true)
            }
            className="shopping-basket"
            width="30"
            height="30"
            src="https://img.icons8.com/ios-glyphs/30/shopping-cart--v1.png"
            alt="shopping-cart--v1"
          />
          <span class="badge">{shoppingList.length}</span>
        </div>
      </nav>
      <ShoppingCart
        show={showShoppingCart}
        shoppingList={shoppingList}
        deleteFromShoppingList={(product) => remove(product)}
      />
      <div className="cards-container">
        {products.length > 0 && (
          <div className="productListClass">
            {products.map((pr) => {
              return (
                <Product
                  key={pr.id}
                  item={pr}
                  AddProductToList={(product) => {
                    add(product);
                  }}
                />
              );
            })}

            <Product />
          </div>
        )}
      </div>
    </>
  );
}
