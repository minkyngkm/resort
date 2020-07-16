import React from 'react';
import LoadImg from '../images/gif/loading-arrow.gif'
function Loading() {
    return (
        <div className="loading">
            Page loading
            <img src={LoadImg} alt="loading"/>
        </div>
    )
}
export default Loading;
