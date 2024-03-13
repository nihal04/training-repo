import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

export default function Products() {
  const [pagenumber, setPagenumber] = React.useState(0);
  function NextPage() {
    setPagenumber((prevState) => prevState + 5);
  }
  function PreviousPage() {
    setPagenumber((prevState) => prevState - 5);
  }
  const { data, isLoading, isFetching } = useQuery(
    ["products", pagenumber],
    () => {
      return axios.get(
        `https://dummyjson.com/products?limit=5&skip=${pagenumber}`
      );
    }, {keepPreviousData: true}
  );
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="container">
      {isFetching ? <h3>Fetching Again....</h3> : null}
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <table className="table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Description</th>
                <th>Price</th>
                <th>Brand</th>
              </tr>
            </thead>
            <tbody>
              {data.data.products.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img src={item.thumbnail} width="50%" />
                  </td>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>{item.price}</td>
                  <td>{item.brand}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-center">
            <button
              onClick={PreviousPage}
              disabled={pagenumber == 0}
              className="btn btn-primary me-2"
            >
              Previous
            </button>
            <button onClick={NextPage} className="btn btn-primary">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
