import React, {Component} from 'react';
import TitleSection from "../Components/titleSection";
import Product from "../Components/Product";
import img1 from "../Images/item-01.jpg";
import ProductsRequest from "../Requests/ProductsRequest";

class Products extends Component {
    state = {
        products:[]
    }
    componentDidMount() {
        const Products = ProductsRequest.get('http://localhost:3000/Data/products.json');
        Products.then(res=>{
            let x = res.data.products;
            this.setState({
                products: this.state.products.concat(x)
            })
        })
    }

    render() {
        return (
            <div className='category-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <TitleSection title='محصولات'></TitleSection>
                        </div>
                    </div>
                    <div className='row tab-section-row'>
                        {
                            this.state.products.map(item=>(<div className=' col-lg-3 col-md-4 col-sm-6 col-12' key={item.id}>
                                <Product id={item.id} title={item.name} price={item.price} image={item.img}></Product>
                            </div>))
                        }

                    </div>

                </div>

            </div>
        );
    }
}

export default Products;