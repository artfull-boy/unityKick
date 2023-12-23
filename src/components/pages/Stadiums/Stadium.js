import React from 'react'
import './Stadium.css'
import mainBackground from '../../../images/unsplash_1XLyzi17Z2M.png'
import image2 from '../../../images/mario-klassen-70YxSTWa2Zw-unsplash.jpg'
import image3 from '../../../images/victoria-prymak-CCe_Xt5sEDA-unsplash.jpg'
import image4 from '../../../images/vienna-reyes-Zs_o1IjVPt4-unsplash.jpg'
import image5 from '../../../images/vienna-reyes-qCrKTET_09o-unsplash.jpg'

function Stadium() {
    const [mainImage, setMainImage] = React.useState(mainBackground);
    const handleClick = (src) => setMainImage(src)
  return (
    <div className='stadiumPage'>
        <div className='heroSection'>
            <img className='background' src={mainImage}></img>
            <div className='images'>
                <img className={mainImage==mainBackground?'first':'first inactive'} src={mainBackground} onClick={() => handleClick(mainBackground)}></img>
                <img className={mainImage==image2?'':'inactive'} src={image2} onClick={() => handleClick(image2)}></img>
                <img className={mainImage==image3?'':'inactive'} src={image3} onClick={() => handleClick(image3)}></img>
                <img className={mainImage==image4?'':'inactive'} src={image4} onClick={() => handleClick(image4)}></img>
                <img className={mainImage==image5?'last':'last inactive'} src={image5} onClick={() => handleClick(image5)}></img>
            </div>
        </div>
    </div>
  )
}

export default Stadium