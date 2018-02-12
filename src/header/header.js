import React from 'react';
import Logo from './logo'
import Label from './label';
import PhoneNumber from './phoneNumber';
import Cart from './cart';
/*class Header extends React.Component{
    constructor(props) {
    super(props);
    }
    render()
    {
        return(
            <div className="header">
            <Logo/>
            <Label/>
                <PhoneNumber/>
                <Cart/>
            </div>
        );
    }
}*/
function Header(props){
    //console.log(props);
    const returnElement =  <div className="header">
        <Logo/>
        <Label/>
        <PhoneNumber/>
        <Cart  itemsInCart={props.itemsInCart} changeCurrentPage ={props.changeCurrentPage}/>
    </div>;
    return returnElement;

}
export default Header;