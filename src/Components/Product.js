import React from "react";
import '../Styles/card.css';
import {Link} from "react-router-dom";




class Product extends React.Component{
    render() {
        return (
            <div className='card card-cs'>
                <div className='card-body card-body-cs'>
                    <Link to={`./productItem/${this.props.id}`}><img src={`/Images/products/${this.props.image}`} className='card-cs-image' lazy></img></Link>

                </div>
                <div className='card-footer card-footer-cs'>
                    <Link to={`./productItem/${this.props.id}`} className={'card-footer-cs-title'}>{this.props.title}</Link>
                    <p className='card-footer-cs-price'>{this.props.price}تومان</p>
                </div>
            </div>
        );
    }
}

export default Product;