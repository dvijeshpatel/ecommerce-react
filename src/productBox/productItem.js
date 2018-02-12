import React,{Component} from 'react';
class ProductItem extends Component{
    constructor(props)
    {
        super(props);
        //this.onAddToCartButtonClickHandler = this.onAddToCartButtonClickHandler.bind(this);
    }


   render()
    {


        const returnElement =  <div className="single-product" data-id={this.props.item.itemId} onClick={this.props.showModal}>
            <img className="product-image" src={this.props.item.imagePath}  />

                <div className="item_name content-padding">
                    {this.props.item.itemName}
                </div>
                <div className="flex-row content-padding">
                    <div className="item-price"><i className="fa fa-inr" aria-hidden="true"></i>{this.props.item.itemPrice}</div>
                    <div className="item-rating">{this.props.item.itemRating}<i className="fa fa-star" aria-hidden="true"></i></div>
                </div>
                <button className="product-button" data-type="addToCart" data-item-id={this.props.item.itemId} onClick={this.props.onAddToCartButtonClickHandler}>
                    <i className="fa fa-shopping-cart product_cart_logo" aria-hidden="true"></i>
                    ADD TO CART</button>

                </div>;

        return returnElement;

    }
}
export  default ProductItem;