export default function Product({ item, AddProductToList }) {
  return (
    <>
    {
        item && 
        <div className="card">
        <div className="imgBox">
          <img
            src={item.image}
            alt="mouse corsair"
            className="mouse"
          />
        </div>

        <div className="contentBox">
          <h3>{item.title}</h3>
          <h2 className="price">{item.price} €</h2>
          <button onClick={()=>AddProductToList(item)} className="buy">  Buy Now </button>
          <a href="#" >
           
          </a>
        </div>
      </div>
    }
     
    </>
  );
}
