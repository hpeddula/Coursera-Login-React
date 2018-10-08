import React from 'react';
import {Image} from 'react-bootstrap';
import './Walter.css';
const Walter = () => {
    return(
    <div>
        <Image responsive={true} rounded={true} bsClass="img" className="walter" src="https://www.sickchirpse.com/wp-content/uploads/2016/05/Walter-White-1.jpg" />
    </div>
    );
}
export default Walter;