export default function ShoppingCartProduct({
  product,
  deleteFromShoppingList,
}) {
  return (
    <>
      <hr></hr>
      <div className="shopping-cart-products-container">
        <div className="shopping-cart-product">
          <img src={product.image} />
          <h3>{product.title}</h3>
          <h3 className="price">{product.price}€</h3>
          <h3
            className="delete"
            onClick={() => deleteFromShoppingList(product)}
          >
            X
          </h3>
          <hr></hr>
        </div>
      </div>
      <hr></hr>
    </>
  );
}
