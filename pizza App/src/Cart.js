import React, {useState, useEffect} from "react";
import axios from "axios";

export default function Cart(props){
  const [data, setData] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartData, setCartData] = useState([]);
  const [ren, setRen] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const [gst, setGst] = useState(0);
  const [payable, setPayable] = useState(0);
  useEffect(() => {
    axios
      .get("http://localhost:3000/Cart")
      .then((res) => {
        setData(res.data);
        let arr1 = [];
        res.data.forEach((ele)=>{
          arr1.push(ele.name);
        })
        let uniqArr = arr1.filter((ele, i)=> arr1.indexOf(ele)===i);
        
        
        let finalArr = [];
        uniqArr.forEach((ele)=>{
          let count = 0;
          let price = 0;
          let id = "";
          res.data.forEach((el)=>{
            if(ele === el.name){
              count = count + 1;
              price = el.price;
              id = el.id;
            }
          })
          let obj = {
            id: id,
            name: ele,
            price: price,
            count: count
          }
          finalArr.push(obj);
        })
        
        setCartData(finalArr);
        setCartCount(res.data.length);
        let tAmount = 0;
        res.data.forEach((ele)=>{
          tAmount = tAmount + ele.price;
        })
        setTotalAmount(tAmount);
        let GST = (0.05*tAmount);
        setGst(GST);
        let payable = (0.05*tAmount) + tAmount;
        setPayable(payable);
        props.setFlag(!props.flag);
      });
  }, [ren]);

  const increaseItem = (item)=>{
    if(data.length < 10){
      axios.post("http://localhost:3000/Cart", item).then(res=>{
          setRen(!ren);
          })
    }
  }

  const reduceItem = (item) => {
    if(data.length > 1){
      axios.delete(`http://localhost:3000/Cart/${item.id}`).then(res => {
      setRen(!ren);
    });
  }
  }

  const deleteItem = (item) => {
    data.forEach((ele)=>{
      if(item.name === ele.name){
        axios.delete(`http://localhost:3000/Cart/${ele.id}`).then(res => {
      });
      }
    })
    setRen(!ren);
  }
  
    return (
        <div className="container bg-dark-subtle rounded p-4">
          <div className="row">
            <div className="col-md-4 offset-md-4">
              <h1 className="text-center display-4" style={{fontWeight:"300"}}>Items in your cart</h1>
              <hr class="hr" />
              {cartData.map((item, i)=>{
                let finalPrice = item.count * item.price;
                return(
                  <div className="row" style={{display:"flex", paddingTop:"5px", width:"150%"}} key={i}>
                <div className="col">
                   <p style={{fontSize:"20px", fontWeight:"400", color:"grey", marginTop:"10px"}}>{item.name}</p>
                </div>
                <div className="col" style={{display:"flex", height:"45px", marginTop:"10px"}}>
                   <input _ngcontent-mrj-c45 type="button" value="-" class="minus" style={{width:"40px"}} onClick={()=>reduceItem(item)}/>
                   <input _ngcontent-mrj-c45 style={{width:"40px"}} value={item.count} className="text-center"></input>
                   <input _ngcontent-mrj-c45 type="button" value="+" class="plus" style={{width:"40px"}} onClick={()=>increaseItem(item)}/>
                </div>
                <div className="col" style={{display:"flex"}}>
                    <p style={{fontSize:"20px", fontWeight:"400", color:"grey", paddingTop:"10px", paddingLeft:"50px"}}>{`Rs. ${finalPrice}`}</p>
                    <a type="button" style={{paddingTop:"13px", paddingLeft:"20px"}} onClick={()=>deleteItem(item)}>
                        <img src="images/icons8-close-24.png" width="20" height="20" />
                    </a>
                </div>

              </div>
                )
              })}
              
              <div className="row">
                <tr style={{fontSize:"20px", marginTop:"40px"}}>
                  <th _ngcontent-rdc-c45 style={{paddingRight:"100px"}}>Total Amount</th>
                  <th _ngcontent-rdc-c45 colspan="4" style={{paddingLeft:"90px"}}>
                    {`Rs. ${totalAmount}`}
                  </th>
                  <hr class="hr" />
                </tr>
                <tr style={{fontSize:"20px", marginTop:"20px"}}>
                  <th _ngcontent-rdc-c45 style={{paddingRight:"100px"}}>GST@5%</th>
                  <th _ngcontent-rdc-c45 colspan="4" class="text-right" style={{paddingLeft:"133px"}}>
                    {`Rs. ${gst}`}
                  </th>
                  <hr class="hr" />
                </tr>
                <tr style={{fontSize:"20px", marginTop:"20px"}}>
                  <th _ngcontent-rdc-c45 style={{paddingRight:"100px"}}>Amount to be paid</th>
                  <th _ngcontent-rdc-c45 colspan="4" class="text-right" style={{paddingLeft:"40px"}}>
                    {`Rs. ${payable}`}
                  </th>
                  <hr class="hr" />
                </tr>
              </div>
              <div className="mt-2 mb-5">
                <button className="btn btn-success">CheckOut</button>
              </div>
            </div>
          </div>
        </div>
    )
}