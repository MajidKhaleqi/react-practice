import ShoppingCartProduct from './ShoppingCartProduct'
export default function ShoppingCart({ show , shoppingList ,deleteFromShoppingList}) {
  return <>{ 
    show && 
    <div className="shopping-cart">
          {
              shoppingList.map((product)=>{
                  return <ShoppingCartProduct product={product} deleteFromShoppingList={deleteFromShoppingList}/>
              })
          }
    </div>
    }</>;
}
