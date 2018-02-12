import React from 'react';
import ModealCategories from '../categories/modelCategories';
class FilterMenu extends React.Component{
    constructor(props){
        super(props);
        this.onClickHandler =this.onClickHandler.bind(this);
    }
    apendItem(name, itemType, itemSubType)
    {
        const element =
            <div style={{"display":"flex"}}>
                {this.apendArrow()}
            <div data-item-type={itemType} data-item-sub-type={itemSubType} className="filter-menu__item">{name}
            </div>
            </div>;
       return element;
    }
    apendArrow() {
        return <i className="fa fa-caret-right filter-menu-item" aria-hidden="true"></i>;
     }
    onClickHandler(event){
        const itemType = event.target.dataset.itemType;
        const itemSubType = event.target.dataset.itemSubType;
        console.log(itemType+" "+itemSubType);
        if(itemType&&itemSubType){
            this.props.changeType(itemType,itemSubType);
        }

    }
    createSubCatElement(category,itemType,itemSubType)
    {
        const subCatKeys = Object.keys(category.subCategories);
        console.log(category.subCategories[subCatKeys[itemSubType]]);
        const element = this.apendItem(category.subCategories[subCatKeys[itemSubType]].label,itemType,itemSubType);
        console.log(element);
        return element;
    }
    render(){
        console.log(this.props);
        const catKeys = Object.keys(ModealCategories);
        const itemType = this.props.itemType;
        const itemSubType = this.props.itemSubType;
       const element= <div className="filter-menu" onClick={this.onClickHandler}>
            {this.apendItem("All","All","All")}
            {itemType!="All"? this.apendItem(ModealCategories[catKeys[itemType]].label,itemType,"All"):""}
           {itemSubType!="All"?this.createSubCatElement(ModealCategories[catKeys[itemType]],itemType,itemSubType):""}

       </div>;
        const returnElement = this.props.currentPage=="home"?element:"";
        return returnElement;

    }
}
export default FilterMenu;