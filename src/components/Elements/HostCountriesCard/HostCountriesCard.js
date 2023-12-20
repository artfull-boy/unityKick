import './HostCountriesCard.css'
import React from "react"
export default function HostCountriesCard(props){
    const componentStyle = {
        backgroundImage: `url(${props.bg})`,
    };
    return<>
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
    </>
}