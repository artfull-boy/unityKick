import { Link } from 'react-router-dom';
import './ShopCard.css';
import React from "react"

export default function ShopCard(props){
    return <>
        <div className='shop-card'>
            <div className='kit-img'>
                <img src={props.kit}></img>
            </div>
            <div className='kit-details'>
                <Link to={props.link}><h3>{props.desc}</h3></Link>
                <p>{props.price}</p>
            </div>
        </div>
    </>
}