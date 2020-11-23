import React from 'react'
import loadingGif from '../images/gif/loading-arrow.gif'
function Loding() {
    return (
        <div className='loading'>
            <h4>rooms data loading...</h4>
            <img src={loadingGif} alt="" />
        </div>
    )
}

export default Loding
