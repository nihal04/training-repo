import React, {useEffect, useState} from "react";
//import List from "@mui/material/List";
//import TodoItem from "./TodoItem";
//import { connect } from "react-redux";
//import { getItems } from "./redux/actions";
import axios from "axios";
import CardDetail from "./CardDetail";
import { connect } from "react-redux";
import { getItems } from "./redux/actions";


function Products(props) {
    const [data, setData] = useState([]);
    useEffect(() => {
      props.getItems();
    }, []);

    console.log(props.products);
  
    // useEffect(() => {
    //     axios
    //       .get("https://dummyjson.com/products")
    //       .then((res) => {
    //         console.log(res);
    //         setData(res.data.products);
    //         });
    //   }, []);

  return (
    <div className="container mt-2">
      {/* <div className="row">
        {
            props.products.map(item => <CardDetail item={item}/>)
        }
    </div> */}
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps, {getItems})(Products);
//export default Products;
