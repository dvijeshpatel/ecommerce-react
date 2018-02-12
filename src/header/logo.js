import React from 'react';
/*class Logo extends React.Component{
    render()
    {
        return <div className="logo">

            <img  className="logo__image" src={require("../assets/background/logo.jpg")} alt="logo"/>
        </div>;
    }
}*/
function Logo(props){
    const returnElement =  <div className="logo">

        <img  className="logo__image" src={"../assets/background/logo.jpg"} alt="logo"/>
    </div>;
        return returnElement;
}
export default Logo;