import React from 'react';
import {connect} from "react-redux";
import img from './../Images/item-01.jpg'
import {Link} from "react-router-dom";
import {removeProduct,decreaseBasketItem,increaseBasketItem} from "../redux/Actions/action";

class BasketProductItem extends React.Component{
    render() {
        const removeProduct = (id)=>{

            this.props.removeProduct(id)


        }
        const increaseProductItem = (id)=>{

            this.props.productCountIncrease(id)

        }
        const deceaseProductItem = (id)=>{

            console.log(id)
           
        }
        return (
            <div className={'basketProduct-item'}>
                <span className='basketProduct-item-image'><Link to={`./productItem/${this.props.id}`}><img src={`./Images/products/${this.props.img}`}></img></Link></span>
                <span className='basketProduct-item-name'>{this.props.name}</span>
                <span className='basketProduct-item-counter'>
                <form>
                    <button type={'button'} onClick={()=>increaseProductItem(this.props.id)}>+</button>
                    <input type='text' value={this.props.count} readOnly></input>
                    <button type={'button'} onClick={()=>deceaseProductItem(this.props.id)}>-</button>
                </form>
                </span>
                <span className='basketProduct-item-price'>قیمت واحد :{this.props.price}</span>
                <span className='basketProduct-item-price'>قیمت کل :{this.props.count * this.props.price}</span>
                <span className='basketProduct-item-icon'><i className='fa fa-trash' onClick={()=>removeProduct(this.props.id)}></i> </span>
            </div>
        );
    }


};
const mapStateToProps = (state)=>{
    return ({
        productItems:state.products,

    })
}
const mapDispatchToProps = (dispatch)=>{
    return ({
        productCountIncrease:(id)=>dispatch(increaseBasketItem(id)),
        productCountDecrease:(id)=>dispatch(),
        removeProduct:(id)=>dispatch(removeProduct(id))

    })
}

export default connect(mapStateToProps,mapDispatchToProps)(BasketProductItem);