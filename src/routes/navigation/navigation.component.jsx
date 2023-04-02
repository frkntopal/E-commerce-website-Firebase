import { Fragment,useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import Logo  from '../../assets/zyro-image.png';
import './navigation.styles.scss'

import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { CartContext } from "../../context/cart.context";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-drowdown.component";


const Navigation = () =>{
    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);

    return (
        <Fragment>
        <div className="navigation">
            <Link className='logo-container' to={'/'}>
            <img src={Logo} alt="" className="logo" />
            </Link>
                <div className="nav-links-container">
            <Link className="nav-link" to={'/shop'}>
                SHOP
            </Link>
            { currentUser ? (
            <span className="nav-link" onClick={signOutUser}>SIGN OUT</span> 
            ) : (   
            <Link className="nav-link" to={'/auth'}>
                SIGN IN
            </Link>  
          )} 
        <CartIcon/>
         </div>
        {isCartOpen && <CartDropdown/>}
      </div>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation;