
import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'


const Product = props =>{
     const{id, description, name} = props;

    return (
    <div className="col-4">
        <div className="card product-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <Link to={`/product/details/${id}`}>View </Link>
        </div>  
    </div>
    )
};

Product.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}
export default Product;