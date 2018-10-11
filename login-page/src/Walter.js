import React from 'react';
import './Walter.css';
const Walter = (props) => {
    return (
        <div className="container-fluid">
            <img className="walter" src="https://www.sickchirpse.com/wp-content/uploads/2016/05/Walter-White-1.jpg" />
            <h2>{props.location.search}</h2>
        </div>
    );
}
export default Walter;