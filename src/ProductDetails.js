import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useParams } from "react-router";
function ProductDetails() {
  const { productId } = useParams();
  return <div>Product Details of {productId}</div>;
}

export default ProductDetails;
