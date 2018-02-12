import React, { Component } from 'react';
class Logo extends React.Component{
    render()
    {
        return (<div  >
          <img  src={require('./assets/background/logo.jpg')} alt={'logo'}/>
        </div>);
    }
}
export default Logo;