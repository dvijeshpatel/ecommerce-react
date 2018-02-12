import React from 'react';
/*class PhoneNumber extends React.Component {
    render(){
        return <div className="phone-wrapper">
            <div className="phone">
                <i className="phone__icon fa fa-phone" aria-hidden="true"></i>
                <h2 className="phone__mobile-no">
                    Call Us: +91 8140476157
                </h2>
            </div>
        </div>;
    }
}*/
function PhoneNumber(props){
    const returnElement = <div className="phone-wrapper">
        <div className="phone">
            <i className="phone__icon fa fa-phone" aria-hidden="true"></i>
            <h2 className="phone__mobile-no">
                Call Us: +91 8140476157
            </h2>
        </div>
    </div>;
            return returnElement;
}
export default PhoneNumber;