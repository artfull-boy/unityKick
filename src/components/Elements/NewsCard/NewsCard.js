import './NewsCard.css';
import React from "react"
import { Link } from 'react-router-dom';
export default function NewsCrad(props){
    return <>
        <div className='news-card col-lg-3 col-md-4 col-sm-6'>
        <Link to={`/news/${props.id}`}><img src={props.image}></img></Link>
        
            <p>World Cup 2030</p>
            <Link to={`/news/${props.id}`}><div className='news-desc'>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div></Link>
            
        </div>
    </>
}