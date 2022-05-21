import React from "react";
import '../Styles/header & nav.css';
import logo from '../Images/header-logo.png';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";


class Nav extends React.Component{

    render() {
        function menu_btn(){
            document.querySelector('.menu-btn-section').addEventListener('click',function (){
                document.querySelector(".navbar-cs-links").classList.toggle('active-menu');
                document.querySelector(".navbar-cs-link").classList.add('active-link');
            })
        }
        const close_menu = ()=>{
            document.querySelector(".navbar-cs-links").classList.remove('active-menu');

        }
        return(
            <div>
            <div className='header-top'>
                <span>به فروشگاه ما خوش آمدید</span>
            </div>
             <div className='navbar-cs'>
                 <div className='navbar-cs-logo'>
                     <span className='menu-btn-section' onClick={menu_btn}><i className='fa fa-bars'></i></span>
                     <span className='logo-section'><img src={logo}></img></span>

                 </div>
                 <div className='navbar-cs-links'>
                     <div className='navbar-cs-item'><NavLink to='/home' className='navbar-cs-link' onClick={()=>{close_menu()}}>خانه</NavLink></div>
                     <div className='navbar-cs-item'><NavLink to='/category' className='navbar-cs-link'  onClick={()=>{close_menu()}}>دسته ها</NavLink></div>
                     <div className='navbar-cs-item'><NavLink to='/products' className='navbar-cs-link'  onClick={()=>{close_menu()}}>محصولات</NavLink></div>
                     <div className='navbar-cs-item'><NavLink to='/about' className='navbar-cs-link'  onClick={()=>{close_menu()}}>درباره ما</NavLink></div>
                     <div className='navbar-cs-item'><NavLink to='/contact' className='navbar-cs-link'  onClick={()=>{close_menu()}}>تماس با ما</NavLink></div>
                     <div className='navbar-cs-item'><NavLink to='/basket' className='navbar-cs-link'  onClick={()=>{close_menu()}}>سبد خرید<span className='badge-cs'>{this.props.basketCounter}</span> </NavLink></div>

                 </div>
            </div>

            </div>
        );
    }
}
const mapStateToprops = (state)=>{
    return ({
        basketCounter :state.products.length
    })

}

export default connect(mapStateToprops)(Nav);