import React from "react";
import TitleSection from "../Components/titleSection";
import '../Styles/category.css'
import Product from "../Components/Product";
import img1 from '../Images/item-01.jpg';
import img2 from '../Images/item-02.jpg';
import img3 from '../Images/item-03.jpg';
import img4 from '../Images/item-04.jpg';
import CategoryRequest from "../Requests/CategoryRequest";
import ProductsCategoryRequest from "../Requests/ProductsCategoryRequest";

class Category extends React.Component{
    state = {
        category:[],
        products:[]
    }
    componentDidMount() {
       const Category =  CategoryRequest.get('http://localhost:3000/Data/category.json');
       Category.then(res=>{
           const data = res.data.categories;
           this.setState({
               category : this.state.category.concat(data)
           })
       })
        const Products =  ProductsCategoryRequest.get('http://localhost:3000/Data/products.json');
       Products.then(res=>{
           const data = res.data.products;
           this.setState({
               products : this.state.products.concat(data)
           })
       })
    }

    render() {
        return (
            <div className='category-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <TitleSection title='دسته بندی محصولات'></TitleSection>
                        </div>
                    </div>
                    <div className='row tab-section-row'>
                        <div className='col-12'>

                            <ul class="nav nav-pills nav-pills-cs">
                                <li class="nav-item">
                                    <a class="nav-link active" data-toggle="pill" href="#home">همه محصولات</a>
                                </li>
                                {
                                    this.state.category.map(item=>(<li className="nav-item">
                                        <a className="nav-link" data-toggle="pill" href={`#menu${item.id}`}>{item.category}</a>
                                    </li>))
                                }



                            </ul>


                            <div class="tab-content tab-content-cs">
                                <div class="tab-pane container active" id="home">
                                    <div className='row'>
                                        {
                                            this.state.products.map(item=>(<div className=' col-lg-3 col-md-4 col-sm-6 col-12'>
                                                <Product id={item.id} title={item.name} price={item.price} image={item.img}></Product>
                                            </div>))
                                        }


                                    </div>
                                </div>
                                {
                                    this.state.category.map(item=>(
                                        <div className="tab-pane container fade" id={`menu${item.id}`}>
                                            <div className='row'>
                                                {
                                                    this.state.products.map(item2=>(item2.category === item.category? <div className=' col-lg-3 col-md-4 col-sm-6 col-12'>
                                                        <Product id={item2.id} title={item2.name} price={item2.price}
                                                                 image={item2.img}></Product>
                                                    </div> : null))
                                                }



                                            </div>
                                        </div>
                                    ))
                                }


                            </div>

                        </div>
                    </div>

                </div>

            </div>
        );
    }
}



export default Category;