import React from 'react';
class Form extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const returnElement =<div className="form-wrapper">
            <form className="user-details">
                <label className="form-title">User Details</label>
                <label className="required-field">Full Name</label>
                <input type="text" placeholder="Full name" name="fullName"  required/>

                <label className="required-field">Mobile number</label>
                <input type="text" placeholder="Mobile no"  name="mobileNo" required/>
                <label className="required-field">Pin Code</label>
                <input type="text" placeholder="Pincode" name="pinCode" required/>
                <label className="required-field"> Address</label>
                <textarea placeholder="Address" name="address" required>
          </textarea>
                <input type="submit" value="Deliver to this address"/>
            </form>
        </div>

        return returnElement;
    }
}
export default Form;

