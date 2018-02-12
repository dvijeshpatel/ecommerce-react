import React from 'react';
import ModelCategories from '../categories/modelCategories';
/*class Menu extends React.Component{
    constructor(props)
    {
        super(props);
    }

    render(){
        return <ul className="menu">
               <HomeIcon/>
               <Categories categories={ModelCategories}/>

        </ul>;
    }
}*/
class Menu extends React.Component
{
    constructor(props) {
    super(props);
    this.onClickHandler= this.onClickHandler.bind(this);
    }
    onClickHandler(event){
        this.props.changeCurrentPage("home");
       const itemType = event.target.dataset.itemType;
       const itemSubType = event.target.dataset.itemSubType;
       console.log(itemType+" "+itemSubType);
        if(itemType&&itemSubType){
             this.props.changeType(itemType,itemSubType);
        }

    }
    render(){
        const returnElement = <ul className="menu" onClick={this.onClickHandler}>
            <HomeIcon/>
            <Categories categories={ModelCategories}/>

        </ul>;
        return returnElement;
    }
}
/*class HomeIcon extends React.Component {
    constructor(props) {
        super(props);
    }
    render()
    {
        return <li>
            <a >
                <i id="home-button" data-item-type="ALL" data-item-sub-type="ALL" className="fa fa-home" aria-hidden="true"></i>
            </a>
        </li> ;
    }

}*/
function HomeIcon(props)
{
    const returnElement =  <li className="menu__cat-wrapper">
        <a className="cat-subcat-label">
            <i id="home-button" data-item-type="All" data-item-sub-type="All" className="fa fa-home" aria-hidden="true"></i>
        </a>
    </li> ;
            return returnElement;
}
/*class Categories extends React.Component{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return <li>
            <a data-item-type={this.props.category.catId} data-item-sub-type={this.props.category.label}></a>
            <i class="fa fa-caret-down" aria-hidden="true"></i>
            <ul>

            </ul>
          </li>;
    }


}*/
function SubCategories(props)
{
   const listSubCategories=[]
    for (let key in props.category.subCategories) {
        let item = props.category.subCategories[key];
        const subCategory = <li key = {item.subCatId}  className="cat-list__sub-cat-wrapper"><a data-item-type={props.category.catId}
                                                                                                className="cat-subcat-label"
                                                         data-item-sub-type={item.subCatId}>{item.label}</a></li>;
        listSubCategories.push(subCategory);
    }
    return listSubCategories ;

}
function Categories(props){
    const categories = props.categories;
    const listCategories=[];
    for (let key in categories) {
        let item = categories[key];
        const itemElement =  <li key={item.catId} className="menu__cat-wrapper" >
            <a data-item-type={item.catId} data-item-sub-type="All" className="cat-subcat-label">{item.label}</a>
            <i className="fa fa-caret-down" aria-hidden="true"></i>
            <ul className="menu__cat-list">
               <SubCategories category = {item}/>
            </ul>
        </li>;
     listCategories.push(itemElement);

    }

   return listCategories;
}
export default Menu;