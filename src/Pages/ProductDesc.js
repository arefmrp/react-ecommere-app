import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {toast,ToastContainer} from "react-toastify";
import '../Styles/productdesc.css'
import 'react-toastify/dist/ReactToastify.css'
import TitleSection from "../Components/titleSection";
import ProductItemRequest from "../Requests/ProductItemRequest";
import {addProduct,removeProduct} from "../redux/Actions/action";
import Modal from 'react-modal';
import {setAppElement} from 'react-modal'
import imgitem1 from '../Images/item-01.jpg';



class ProductDesc extends React.Component{
    state = {
        pItem : [],
        counter:1,
        isOpen: false


    }
    componentDidMount() {
        const idProduct = this.props.match.params.id;
        const Pitem = ProductItemRequest.get('http://localhost:3000/Data/products.json');
        Pitem.then(res=>{
            let x = res.data.products
            let y = x.find(item=>item.id === parseInt(idProduct) );
            this.setState({
                pItem:y
            })
        })


    }




    render() {

        const toggleModal=()=>{
            this.setState({
                isOpen: !(this.state.isOpen)
            })
           console.log(this.state.isOpen)
        }







        const increaseCounter=()=>{
            this.setState({
                counter: this.state.counter + 1
            })

        }
        const decreaseCounter=()=>{
            this.setState({
                counter: this.state.counter > 1 ? this.state.counter - 1 : this.state.counter
            })
        }
        const notify = (message)=>toast(message)
        const selectedProduct= (pid,name,count,price,img) => {

             this.props.addProduct(pid,name,count,price,img)
             notify('به سبد خرید اضافه شد')


        }
        function selectImage(){
            let imageItem = document.querySelectorAll(".product-section-image-item");
            let imageMain = document.querySelector(".product-section-image-main");
            for (let i=0;i<imageItem.length;i++){
                imageItem[i].addEventListener('click',function (){
                    imageMain.src = imageItem[i].src;
                })
            }

        }






        return (

            <div className='product-section' onLoad={selectImage}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <TitleSection title='جزییات محصول'></TitleSection>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-lg-7 col-md-5 col-sm-6 col-xs-12 '>
                            <div className='product-section-details-box'>
                                <span className='product-section-details-box-title'>{this.state.pItem.name}</span>
                                <span className='product-section-details-box-price'>{this.state.pItem.price} تومان</span>
                                <span className='product-section-details-box-desc'>
                                    {
                                        this.state.pItem.description
                                    }
                                </span>
                                <span className='product-section-details-box-remain'>{this.state.pItem.remain} عدد باقی مانده در انبار</span>
                                <span className='product-section-details-box-order'>

                                    <form>
                                        <span>تعداد :</span>
                                        <span className={'counter-buttons'}>
                                            <button type={'button'} onClick={increaseCounter}>+</button>
                                            <button type={'button'} onClick={decreaseCounter}>-</button>

                                        </span>
                                        <input type='text' value={this.state.counter}></input>

                                         <button type={'button'} onClick={()=>{selectedProduct(this.state.pItem.id,this.state.pItem.name,this.state.counter,this.state.pItem.price,this.state.pItem.img)}}>سفارش</button>
                                         <ToastContainer/>
                                    </form>

                                </span>
                                <span className='product-section-details-box-category'>
                                    <span>دسته ها :</span>
                                    <ul>
                                        <li>/لباس زنانه</li>
                                        <li>/{this.state.pItem.category}</li>
                                        <li>/{this.state.pItem.name}</li>
                                    </ul>
                                </span>
                                <span className='product-section-details-box-icons'>
                                    <ul>
                                        <li><a href='#'><i className='fa fa-instagram'></i></a></li>
                                        <li><a href='#'><i className='fa fa-linkedin'></i></a></li>
                                        <li><a href='#'><i className='fa fa-facebook'></i></a></li>
                                        <li><a href='#'><i className='fa fa-telegram'></i></a></li>
                                    </ul>

                                </span>

                            </div>
                        </div>
                        <div className='col-lg-4 col-md-5 col-sm-6 col-xs-12'>
                            <div className='product-section-image-box'>
                                <div className='card-cs-image-box'>
                                    <div className='card-body card-cs-image-box-body'>

                                        <div className=" modal fade" id="staticBackdrop" data-backdrop="static"
                                             data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel"
                                             aria-hidden="true">
                                            <div className="modal-dialog  modal-dialog-centered">
                                                <div className="modal-content">

                                                    <div className="modal-body">
                                                        <img src={`/Images/products/${this.state.pItem.img}`} className='product-section-image-main' data-dismiss="modal" aria-label="Close" ></img>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>




                                        <img src={`/Images/products/${this.state.pItem.img}`} className='product-section-image-main' data-toggle="modal" data-target="#staticBackdrop"></img>
                                    </div>
                                    <div className='card-footer card-cs-image-box-items' onLoad={selectImage}>
                                        {
                                            this.state.pItem.otherImg ? this.state.pItem.otherImg.map(item=>( <img src={imgitem1} className='product-section-image-item' key={item.id}></img>)):null
                                        }


                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    console.log(state)
    return ({

    })

}
const mapDispatchToProps = (dispatch)=>{

    return({
        addProduct:(item1,item2,item3,item4,item5)=>dispatch(addProduct(item1,item2,item3,item4,item5))

    })
}

export default connect(mapStateToProps,mapDispatchToProps)( withRouter(ProductDesc) );