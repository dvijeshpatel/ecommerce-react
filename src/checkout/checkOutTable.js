import React from 'react';
import Form from '../form/form'

function CheckOutTableTitle(props) {
    return <thead>
    <tr className="cart-table__row cart-table__row-head">
        <th className="cart-table__col-head">Product Image</th>
        <th className="cart-table__col-head">Product Name</th>
        <th className="cart-table__col-head">Price</th>
        <th className="cart-table__col-head">Quantity</th>
        <th className="cart-table__col-head"></th>
    </tr>
    </thead>;
}

function CheckOutTableFooter(props) {
    return <tr className="cart-table__row cart-table__row-head">
        <th className="cart-table__col-head"></th>
        <th className="cart-table__col-head"></th>
        <th className="cart-table__col-head">Subtotal</th>
        <th className="cart-table__col-head" id="totalItems">{props.totalItems} items</th>
        <th className="cart-table__col-head" id="totalPrice"> {props.totalPrice} Rs.</th>
    </tr>;
}

class CheckOutItem extends React.Component {

    render() {
        return <tr className="cart-table__row">
            <td className="cart-table__col product-image-wrapper">
                <img className="cart-table__img" src={this.props.itemInCart.item.imagePath}
                     alt={this.props.itemInCart.item.itemName}/>
            </td>
            <td className="cart-table__col cart-table__item-name ">{this.props.itemInCart.item.itemName}</td>
            <td className="cart-table__col cart-table__item-price ">
                <i className="fa fa-inr" aria-hidden="true"></i>
                {this.props.itemInCart.item.itemPrice}</td>
            <td className="cart-table__col">
                <button className="btn-plus" data-id={this.props.itemInCart.item.itemId} data-change="1"
                        onClick={this.props.onClickHandlerPlusMinus}>+
                </button>
                <input type="text" data-id={this.props.itemInCart.item.itemId} className="cart-table__quantity"
                       value={this.props.itemInCart.quantityInCart}
                       data-old-quantity={this.props.itemInCart.quantityInCart}
                       onChange={this.props.onQuantityChangeHandler}/>
                <button className="btn-minus" data-id={this.props.itemInCart.item.itemId} data-change="-1"
                        onClick={this.props.onClickHandlerPlusMinus}>-
                </button>
            </td>
            <td className="cart-table__col">
                <button className="remove-button" data-button-id={this.props.itemInCart.item.itemId}
                        onClick={this.props.removeItem}>
                    Remove
                    <i className="fa fa-times" aria-hidden="true"></i>
                </button>
            </td>
        </tr>;

    }
}

class CheckOutTable extends React.Component {
    constructor(props) {
        super(props);
        this.onClickHandlerPlusMinus = this.onClickHandlerPlusMinus.bind(this);
        this.onQuantityChangeHandler = this.onQuantityChangeHandler.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    countTotalItemsInCart() {
        let totalItemsInCart = 0;
        this.props.itemsInCart.forEach((element) => {
            totalItemsInCart += element.quantityInCart;
        })
        console.log(totalItemsInCart);
        return totalItemsInCart;
    }

    countTotalPriceOfCart() {
        let totalPrice = 0;
        this.props.itemsInCart.forEach((element) => {
            totalPrice += element.quantityInCart * element.item.itemPrice;
        })

        return totalPrice;

    }

    onQuantityChangeHandler(event) {
        console.log("RRERE");
        console.log(event.target.value);
        let itemId = Number(event.target.dataset.id);
        let newValue = Number(event.target.value);
        let duplicate = this.props.itemsInCart.slice();
        let idx = this.props.itemsInCart.findIndex((element) => {
            return element.item.itemId === itemId
        });
        if (!Number.isInteger(newValue)) {
            event.target.value = this.props.itemsInCart[idx].quantityInCart;
            alert("Enter numberic data");
            return;
        }

        if (!Number.isInteger(newValue)) {
            event.target.value = this.props.itemsInCart[idx].quantityInCart;
            alert("Enter numberic data");
            return;
        }

        if (newValue < 0) {
            event.target.value = this.props.itemsInCart[idx].quantityInCart;
            alert("Insert positive value");
            return;
        }

        if (newValue > this.props.itemsInCart[idx].item.quantity) {
            alert("quantity not available");
            event.target.value = this.props.itemsInCart[idx].quantityInCart;
            return;
        }
        duplicate[idx].quantityInCart = newValue;
        this.props.updateItemsInCart(duplicate);

    }

    onClickHandlerPlusMinus(event) {

        let itemId = Number(event.target.dataset.id);
        let change = Number(event.target.dataset.change);
        let duplicate = this.props.itemsInCart.slice();
        let idx = this.props.itemsInCart.findIndex((element) => {
            return element.item.itemId === itemId
        });
        let quantity;
        if (change === 1)
            quantity = Number(event.target.nextElementSibling.value);
        else if (change === -1)
            quantity = Number(event.target.previousElementSibling.value);
        if (quantity === this.props.itemsInCart[idx].item.quantity && change === 1) {
            alert("this is the maximum quantity");
            return;
        }
        if (quantity === 0 && change === -1) {
            alert("this is the minimum quantity");
            return;
        }
        console.log(quantity);
        console.log(duplicate[idx].quantityInCart);
        console.log(typeof duplicate[idx].quantityInCart);
        duplicate[idx].quantityInCart += change;
        console.log(duplicate);
        this.props.updateItemsInCart(duplicate);


    }

    removeItem(event) {
        let itemId = Number(event.currentTarget.dataset.buttonId);
        //console.log(itemId);
        const duplicate = this.props.itemsInCart.filter(element => {
            return element.item.itemId !== itemId
        });
        this.props.updateItemsInCart(duplicate);


    }

    render() {
        console.log(this.props.itemsInCart);
        const cartTableItemsDisplay = this.props.itemsInCart.map(element => <CheckOutItem key={element.item.itemId}
                                                                                          itemInCart={element}
                                                                                          onClickHandlerPlusMinus={this.onClickHandlerPlusMinus}
                                                                                          onQuantityChangeHandler={this.onQuantityChangeHandler}
                                                                                          removeItem={this.removeItem}/>)
        const returnElement = <div className="checkOutTableWrapper">
            <table className="cart-table">
                <CheckOutTableTitle/>
                <tbody>
                {cartTableItemsDisplay}

                <CheckOutTableFooter totalItems={this.countTotalItemsInCart()}
                                     totalPrice={this.countTotalPriceOfCart()}/>
                </tbody>
            </table>
            <Form/>
        </div>;
        return returnElement;
    }
}

export default CheckOutTable;