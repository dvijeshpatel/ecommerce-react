import React from 'react';
import modelItems from '../items/modelItems';
//import AllItems from './allItems';
import ProductItem from './productItem';
import ItemModal from './itemModal';
import CheckOutTable from '../checkout/checkOutTable';
class ProductBox extends React.Component
{
    constructor(props)
    {
        super(props);
        this.onAddToCartButtonClickHandler = this.onAddToCartButtonClickHandler.bind(this);
        this.state={modal:""};
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    onAddToCartButtonClickHandler(event){
        event.stopPropagation();
        let elementType = event.target.dataset.type;
        console.log(event.target.dataset);
        console.log(this.props.itemsInCart);
        if (elementType == 'addToCart') {
            let itemId = event.target.dataset.itemId;
            console.log(itemId);
             let isItemPresent =
                  this.props.itemsInCart.find(element=>element.item.itemId==itemId);
             if (isItemPresent) {
                  alert('Item is All ready in cart');
                  return;
              }
              let itemToBePutInCart = modelItems.find(element=>element.itemId==itemId);

              let itemToAdd = {};
              itemToAdd.item = itemToBePutInCart;
              itemToAdd.quantityInCart = 1;


             this.props.addItemInCart(itemToAdd);
        }
    }
    showModal(event){
        const itemId = event.currentTarget.dataset.id;
        const item = modelItems.find((item)=>{
            return item.itemId == itemId;

        });
        this.setState({modal:<ItemModal item={item} hideModal={this.hideModal}  onAddToCartButtonClickHandler={this.onAddToCartButtonClickHandler}/>});

    }
    hideModal(event){
        if(event.target.className=="modal" || event.target.className=="close")
        this.setState({modal:""});
    }
    render()
    {

         let itemsToDisplay=modelItems;
       if (this.props.itemType != "All") {

            itemsToDisplay = itemsToDisplay.filter((item)=>{
                return item.itemType == this.props.itemType;

        });
       }

        if (this.props.itemSubType != 'All') {
            itemsToDisplay = itemsToDisplay.filter((item)=> {
                return item.itemSubType == this.props.itemSubType;
               });


        }

     if(this.props.currentSearch!="All") {
            itemsToDisplay = itemsToDisplay.filter((element) =>{

                return (element.itemName.toUpperCase().indexOf(this.props.currentSearch.toUpperCase()) > -1);
            });
        }
        const allItems = itemsToDisplay.length>0? itemsToDisplay.map((item)=>{return <ProductItem item={item} key={item.itemId}
                                                                         onAddToCartButtonClickHandler={this.onAddToCartButtonClickHandler} showModal={this.showModal} />}):
            <div className="notice-message">Items Not Available</div>;


       let contentInProductBox="";
       if(this.props.currentPage=="home")
       {
           contentInProductBox = allItems;
       }
       else if(this.props.currentPage=="checkout")
       {
           contentInProductBox=<CheckOutTable itemsInCart={this.props.itemsInCart} updateItemsInCart={this.props.updateItemsInCart}/>;
       }

        return (<div className="product-box">
            {contentInProductBox}
            {this.state.modal}
        </div>);
    }

}
export default ProductBox;