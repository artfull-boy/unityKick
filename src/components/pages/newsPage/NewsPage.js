import React from 'react'
import data from "../../../data/news.json"
import { useLocation, useParams } from 'react-router-dom';
import News from '../dashboard/News/News'
import './NewsPage.css';

function NewsPage() {
    const { id } = useParams(); // If you're using URL params to pass the ID
    if (!id) {
        return <div>No data found</div>;
    }
    console.log(id)
    const {title,image,description} = data[0].news.find((item) => item.id == id)
    return (
        <div className='newsPage container '>
            <p className='newsTitle'>{title}</p>
                <img src={image} className='img-fluid'></img>
            <div className='article'>
                <p>{description}</p>
            </div>
            <News country="All"/>
        </div>
    )

    }

export default NewsPage