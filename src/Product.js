import React from "react";
import { Outlet } from "react-router";
function Product() {
  return (
    <div>
      Hello Product
      <hr />  
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default Product;
