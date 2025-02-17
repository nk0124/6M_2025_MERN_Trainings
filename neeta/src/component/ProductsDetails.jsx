

import React from "react";

function ProductDetails({ products }) {
  return (
    <table border="1" cellPadding="10" style={{ width: "80%", margin: "auto", textAlign: "center" }}>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Price (₹)</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={index}>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProductDetails;


