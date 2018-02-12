import React from 'react';
/*class  Cart extends React.Component{
    constructor(props)
    {
        super(props);

    }
    render()
    {
        return <div className="cart-wrapper">
            <button  className="cart" >
                <i className="fa fa-shopping-cart cart__logo" aria-hidden="true">
                </i>
                <div className = "cart__count-in-cart">
                </div>
                <h2 className="cart__cart-name">
                    SHOPPING CART
                </h2>
            </button>
        </div>;
    }

}*/
class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.onCartClickHandler = this.onCartClickHandler.bind(this);
    }
    countTotalItemsInCart()
    {
        let totalItemsInCart=0;
        this.props.itemsInCart.forEach((element)=>{
               totalItemsInCart+=element.quantityInCart;
        })
        return totalItemsInCart;
    }
    onCartClickHandler(){
        console.log(this.props);
        this.props.changeCurrentPage("checkout");
    }
    render() {
       let totalItemsInCart = this.countTotalItemsInCart();

    const
    returnElement = <div className="cart-wrapper">
        <button className="cart" onClick={this.onCartClickHandler}>
            <i className="fa fa-shopping-cart cart__logo" aria-hidden="true">
            </i>
            <div className="cart__count-in-cart">
                {totalItemsInCart==0? "":totalItemsInCart}
            </div>
            <h2 className="cart__cart-name">
                SHOPPING CART
            </h2>
        </button>
    </div>;
    return returnElement;
}
}
export default Cart;