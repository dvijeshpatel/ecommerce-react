import React from 'react';
/*class Label extends React.Component{
    render(){
        return <div className="label">
            <h1>
                Go Shopping
            </h1>
        </div>
    }
}*/
function Label(props){
    const returnElement = <div className="label">
        <h1>
            Go Shopping
        </h1>
    </div>
    return returnElement;
}
export default Label;