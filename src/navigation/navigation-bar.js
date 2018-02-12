import React from 'react';
import Menu from './menu';
import SearchBar from './searchbar';
/*class NavigationBar extends React.Component{
    constructor(props)
    {
        super(props);
    }
    render(){
        return <div className="navigation-bar">
            <Menu/>
            <SearchBar/>
        </div>;
    }

}*/
class NavigationBar extends React.Component
{
    render() {
        const returnElement = <div className="navigation-bar">
            <Menu itemType={this.props.itemType} itemSubType={this.props.itemSubType}  changeType={this.props.changeType}
                  changeCurrentPage ={this.props.changeCurrentPage}/>
            <SearchBar changeSearchText ={this.props.changeSearchText} changeCurrentPage ={this.props.changeCurrentPage}/>
        </div>;
        return returnElement;
    }
}
export default NavigationBar;