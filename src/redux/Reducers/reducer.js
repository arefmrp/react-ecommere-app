import {createStore} from "redux";
import initialState from "../States/state";
import {addProduct,removeProduct,AddProduct,RemoveProduct,increaseBasketItem,decreaseBasketItem,IncreaseBasketItem,DecreaseBasketItem} from "../Actions/action";


const reducer = (state=initialState,action)=>{
    switch (action.type){
        case AddProduct:{
            return {
                ...state,
                products:[...state.products, {
                    id:state.products.length > 0 ? state.products[state.products.length-1].id + 1: 0,
                    ProductId:action.PId,
                    Name:action.name,
                    Count:action.count,
                    Price:action.price,
                    Img:action.img
                }]
            }
        }
        case RemoveProduct:{
            return {
                ...state,
               products: state.products.filter(item=>item.ProductId !== action.id)
            }
        }
        case IncreaseBasketItem:









    }

    return state
}

const Store = createStore(reducer);

Store.subscribe(()=>{
    console.log(Store.getState());
})




export default Store;