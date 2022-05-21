import React, {Component} from 'react';
import TitleSection from "../Components/titleSection";
import aboutImg from "../Images/about-us.jpg";
import BasketProductItem from "../Components/BasketProductItem";
import '../Styles/basket.css';
import {connect} from "react-redux";

class Basket extends Component {
    state={
        sum:0,
        tax:0,
        sumBasket:0,
        selectPost:30000
    }



    render() {

        const basketProcess = ()=>{


                this.props.productItems.map((item)=>( this.state.sum = this.state.sum + ( item.Count * item.Price )))

                this.state.tax = Math.floor(this.state.sum/12)

                this.state.sumBasket = this.state.sum + this.state.tax + this.state.selectPost

        }

        return (
            <div className='about-section'>
                <div className='container'>
                    <TitleSection title='سبد خرید'></TitleSection>
                </div>
                <div className='container '>
                    <div className='row shadow-lg p-3'>
                       <div className={'col-lg-8 col-md-7 col-sm-12 col-12'}>
                           <div className={'basket-items-title'}>
                               <span>آیتم ها</span>
                           </div>
                           <div className={'basketProduct-items-section'}>

                               {
                                   this.props.productItems.length > 0 ? this.props.productItems.map(item=>(<BasketProductItem id={item.ProductId} name={item.Name} count={item.Count} price={item.Price} img={item.Img}></BasketProductItem>)):<div className='alert alert-warning'>سبد خالی است</div>
                               }


                           </div>

                       </div>
                       <div className={'col-lg-4 col-md-5 col-sm-12 col-12'}>

                           <form className={'process-basket-section shadow-sm p-2'} onLoad={basketProcess()}>
                               <div className={'form-item'}>
                                   <label className={'label-cs'}>جمع محصولات سبد خرید :</label>
                                   <input type={'text'} value={this.state.sum} className={'form-item-cs'} id={'dd'} readOnly></input>
                               </div>
                               <div className={'form-item'}>
                                   <label className={'label-cs'}>مالیات بر سبد خرید:</label>
                                   <input type={'text'} value={this.state.tax} className={'form-item-cs'} readOnly></input>
                               </div>
                               <div className={'form-item'}>
                                   <label className={'label-cs'}>انتخاب نوع پست :</label>
                                   <select className={'form-item-cs'}  name={'select-post'} id={'select-post'}>

                                       <option value={1}>پست معمولی</option>
                                       <option value={2}>پست پیشتاز</option>


                                   </select>
                               </div>
                               <div className={'form-item'}>
                                   <label className={'label-cs'}>مبلغ کل برای پرداخت :</label>
                                   <input type={'text'} value={this.state.sumBasket} className={'form-item-cs'} readOnly></input>
                               </div>
                               <div className={'form-item'}>
                                   <button className={'basket-button-cs'}>پرداخت</button>
                               </div>

                           </form>
                       </div>
                    </div>
                </div>


            </div>
        );
    }
}
const mapStateToProps = (state)=>{
    return ({
        productItems:state.products
    })
}


export default connect(mapStateToProps)(Basket);