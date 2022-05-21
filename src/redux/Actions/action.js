const AddProduct = 'Add';
const RemoveProduct = 'Remove';
const IncreaseBasketItem = 'Increase';
const DecreaseBasketItem = 'Decrease';






const addProduct = (pid,name,count,price,img)=>({type:AddProduct,PId:pid,name:name,count:count,price:price,img:img});
const removeProduct = (id)=>({type:RemoveProduct,id:id});
const increaseBasketItem = (id)=>({type:IncreaseBasketItem,id:id});
const decreaseBasketItem = (id)=>({type:DecreaseBasketItem,id:id});




export {
    AddProduct,
    RemoveProduct,
    addProduct,
    removeProduct,
    DecreaseBasketItem,
    IncreaseBasketItem,
    increaseBasketItem,
    decreaseBasketItem
}