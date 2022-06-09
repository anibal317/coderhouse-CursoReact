import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function ItemDetail({name,img,desc, stock}) {
  return (
    <div>  
        <img className="card-img-top" src={img} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{desc} - stcok actual: { stock} unidades</p>
                <a href="#" className="btn btn-primary">Buy</a>
            </div>
    </div>
  );
};

export default ItemDetail