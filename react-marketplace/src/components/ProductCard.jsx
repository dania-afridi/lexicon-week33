import React from "react";
const ProductCard = (props)=>{
    return (
        <div className="product-card">
            <img src={require(`../images/${props.image}`)}  alt={props.category} className="card-image"/>
            <h3>{props.name}</h3>
            <p>{props.category}</p>
            <p>{props.price}</p>
            <div className="card-detail">
                <button className="details-btn">Details</button>
            </div>
        </div>
    );
};

export default ProductCard;