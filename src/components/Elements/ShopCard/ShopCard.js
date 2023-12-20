import './ShopCard.css';
import React from "react"

export default function ShopCard(props){
    return <>
        <div className='shop-card'>
            <div className='kit-img'>
                <img src={props.kit}></img>
            </div>
            <div className='kit-details'>
                <h3>Morocco Away Kit 2030</h3>
                <p>$150.10</p>
            </div>
        </div>
    </>
}