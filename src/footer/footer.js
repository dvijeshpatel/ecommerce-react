import React from 'react';
function Footer(props){
    const returnElement =  <div className="footer" >
        <div className="mail-us">
            <b>  Mail Us:</b> dvijeshpatel9@gmail.com<br/>
            <b>  Call Us:</b> +91 8140476157<br/>
        </div>
        <div className="office-address">
            Office Address: <br/>
            Go Shopping Private Limited,<br/>
            Vaishnavi Summit, Ground Floor, 7th Main,<br/>
            80 Feet Road, 3rd Block,<br/>
            Koramangala,<br/>
            Bengaluru - 560034<br/>
            India<br/>
        </div>
    </div>;
    return returnElement;

}
export default Footer;