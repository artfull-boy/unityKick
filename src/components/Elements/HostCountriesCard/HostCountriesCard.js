import './HostCountriesCard.css'
import React from "react"
import { Link } from 'react-router-dom';
export default function HostCountriesCard(props){
    const componentStyle = {
        backgroundImage: `url(${props.bg})`,
    };
    return<>
        <Link to='/host'>
        <div className='HC-Card' style={componentStyle}>
            <div className='HC-filter'>
                <div className='HC-info'>
                    <div className='text'>
                        <h3>{props.country}</h3>
                        <p>{props.desc}</p>
                    </div>
                    <div className='map'>
                        {props.map}
                    </div>
                </div>
            </div>
        </div>
        </Link>
    </>
}