import './News.css';
import React from "react"
import NewsCard from '../../../Elements/NewsCard/NewsCard';
import newsData from '../../../../data/news.json';

import { Link } from 'react-router-dom';
export default function News(props) {
    const FoundNews = newsData.find((item) => item.country == props.country)
    return <>
        <div className='NewsSection container '>
            <div className='standings-title'>
                <h3>All News and Transfer Today </h3>
            </div>
            <div className='newsCards row'>
                {FoundNews ? FoundNews.news.map((news) => {
                    return <NewsCard id={news.id} title={news.title} image={news.image} description={news.description} />
                }) : "null"}
            </div>

        </div>
    </>
}