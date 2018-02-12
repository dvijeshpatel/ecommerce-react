import React from 'react';
import Header from './header/header.js';
import NavigationBar from './navigation/navigation-bar';
import ProductBox from './productBox/productBox';
import Footer from './footer/footer';
import FilterMenu from './header/filterMenu';
class App extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={
            itemType:"All",
            itemSubType:"All",
            search:"All",
            itemsInCart:[],
            currentPage:"home",
        };
        this.changeType = this.changeType.bind(this);
        this.changeSearchText = this.changeSearchText.bind(this);
        this.addItemInCart = this.addItemInCart.bind(this);
        this.changeCurrentPage = this.changeCurrentPage.bind(this);
        this.updateItemsInCart = this.updateItemsInCart.bind(this);
    }
    changeType(itemType,itemSubType)
    {
        this.setState({itemType:itemType});
        this.setState({itemSubType:itemSubType});
    }
    changeSearchText(currentSearch) {
        this.setState({search:currentSearch});
    }
    addItemInCart(itemToAdd){
        this.setState(prevState =>{return {itemsInCart:[...prevState.itemsInCart,itemToAdd]}});
    }
    updateItemsInCart(itemsInCart)
    {
        this.setState({itemsInCart:itemsInCart});
    }
    changeCurrentPage(page){
        this.setState({currentPage:page});
    }
  render() {
    return(
      <div className="App">
          <div className="header-wrapper" >
          <Header  itemsInCart={this.state.itemsInCart} changeCurrentPage ={this.changeCurrentPage}/>
        <NavigationBar  search={this.state.search}
                       changeType={this.changeType} changeSearchText={this.changeSearchText}   changeCurrentPage ={this.changeCurrentPage}/>
              <FilterMenu  itemType={this.state.itemType} itemSubType={this.state.itemSubType} currentPage={this.state.currentPage}  changeType={this.changeType}/>
          </div>

          <ProductBox  itemType={this.state.itemType} itemSubType={this.state.itemSubType} currentSearch={this.state.search} addItemInCart={this.addItemInCart}
                       itemsInCart={this.state.itemsInCart} currentPage={this.state.currentPage} updateItemsInCart={this.updateItemsInCart}/>
          <Footer/>
      </div>
    );
  }
}

export default App;
