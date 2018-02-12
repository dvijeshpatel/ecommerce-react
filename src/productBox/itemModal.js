    import React from 'react';
    class ItemModal extends React.Component{
        constructor(props)
        {
            super(props);
        }
        makeDescriptionHTML= function(description) {
            let descriptionArray = [];
            for (let key in description) {
                let row = <tr class="specification-table__row">
                    <td class="specification-table__row__first">
                        {key}</td>
                    <td class="specification-table__row__second">
                        { description[key]}
                        </td>
                </tr>
                descriptionArray.push(row);
                //string += `<tr class="specification-table__row"><td class="specification-table__row__first"> ${key}</td>  <td class="specification-table__row__second">${ description[key]}</td></tr>`;
            }
            return descriptionArray;
        }
        render(){
            return <div class="modal" onClick={this.props.hideModal}>
                   <div className="modal-content">
                     <span className="close" onClick={this.props.hideModal}>&times;</span>
                       <div className="modal-item">
                           <div className="modal-item__product-left">
                               <img className="modal-item__product-image" src={this.props.item.imagePath}/>
                               <br/>
                               <div className="modal-item__flex-row ">
                                   <div className="modal-item__item-price"><i className="fa fa-inr" aria-hidden="true"></i>{this.props.item.itemPrice}
                                   </div>
                                   <div className="modal-item__item-rating">{this.props.item.itemRating}<i className="fa fa-star" aria-hidden="true"></i></div>
                               </div>
                               <button className="modal-item__product-button" data-type="addToCart" data-item-id={this.props.item.itemId} onClick={this.props.onAddToCartButtonClickHandler} >
                                   <i className="fa fa-shopping-cart product_cart_logo" aria-hidden="true"></i>ADD TO CART
                               </button>
                           </div>
                           <div className="modal-item__product-right">
                               <div className="modal-item__item-name content-padding">
                                   {this.props.item.itemName}
                                   </div>
                               <hr/>
                               <h1 className="specification-label">
                                   Specification
                               </h1>
                               <table className="specification-table">
                                   {this.makeDescriptionHTML(this.props.item.itemDescription)}
                                   </table>
                           </div>
                       </div>
                   </div>
                   </div>;
        }
    }
    export default ItemModal;