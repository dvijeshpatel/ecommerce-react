import React from 'react';
class SearchBar extends React.Component{
    constructor(props)
    {
        super(props);
        this.onSearchHandler = this.onSearchHandler.bind(this);
    }
    onSearchHandler(event) {
        /*clearTimeout( debounceTimer );
        let debounceTimer = setTimeout(function() {

        }, 500);*/
        console.log(event.target.value);
         if(!event.target.value)
         {
             this.props.changeSearchText("All");
         }
         else{
             this.props.changeSearchText(event.target.value);
         }
   }
    render()
    {
        return <div className="inputWithIcon">
            <input type="text" placeholder="search " id="search-box" className="inputWithIcon__search" onKeyUp={this.onSearchHandler} />
            <i className="fa fa-search inputWithIcon__icon " aria-hidden="true"></i>
        </div>;
    }

}
export default SearchBar;