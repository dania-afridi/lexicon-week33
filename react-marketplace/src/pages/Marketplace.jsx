import React from "react";
import products from "../data/products";
import ProductList from "../components/ProductList";

const Marketplace = ()=> {
    return(
        <>
            <div className="marketplace">
                <ProductList products={products}/>
            </div>
        </>
    );
}

export default Marketplace;