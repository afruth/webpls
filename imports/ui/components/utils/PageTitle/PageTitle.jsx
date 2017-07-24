import React from 'react';
import './PageTitle.css';

export default (props) => {
    return (
        <div className="page-title">
            {props.children}
        </div>
    )
}