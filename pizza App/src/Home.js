import { useEffect, useState } from "react";
import axios from "axios";

export default function Home(props) {
  const [product, setProduct] = useState([]);
  const [cart, setCart] =  useState([]);
  const [ren, setRen] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:3000/Products")
      .then((res) => {
        setProduct(res.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/Cart")
      .then((res) => {
        setCart(res.data);
        props.setCartData(res.data);
      });
  }, [ren, product]);

  const addCart = (item) => {
    if(cart.length < 10){
      let obj = {
        name:item.name,
        price:item.price
      }
      axios.post("http://localhost:3000/Cart", obj).then(res=>{
          setRen(!ren);
          alert("Item added to cart.");
          })
    } else alert("Cart item cannot exceed more than 10.");
  }

  return (
    <div className="container mt-2">
      <div className="row">
        {product.map((item) => (
          <div className="col-md-3" key={item.id}>
            <div className="card mb-3">
              <img src={item.image} className="card-img-top" alt="user" />
              <div className="card-body">
                <h5 className="card-title" style={{fontWeight:"700"}}>
                  {item.name}
                </h5>
                <h6 style={{fontWeight:"400"}}>{item.description}</h6>
                <h5 className="card-title" style={{fontWeight:"600"}}>{`Rs. ${item.price}`}</h5>
                <button className="btn btn-primary" onClick={()=>addCart(item)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
