import React from "react";

import ProductCard from "./ProductCard";


const ProductList = ({products})=>{
    return(
        <div className="product-list">
        {
            products.map((product)=>(
                <ProductCard key={product.id} name={product.name} image={product.image} category={product.category} price={product.price}

                />
            ))
        }
           
        </div>
    );
}

export default ProductList