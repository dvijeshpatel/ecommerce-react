import React from 'react';
import ProductItem from './productItem';

class AllItems extends React.Component{
    constructor(props)
    {
        super(props);
    }

    render() {
        const itemsToDisplay = this.props.allItems.map((item)=>{return <ProductItem item={item} key={item.itemId}/>});
        console.log(itemsToDisplay);
        return <div>{itemsToDisplay}</div>;
    }

}
export default AllItems;