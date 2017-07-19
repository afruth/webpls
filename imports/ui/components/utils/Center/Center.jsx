import React from 'react';
import './Center.css';



export default (props) => {
    return (
        <div className="center">
            {props.children}
        </div>
    )
}