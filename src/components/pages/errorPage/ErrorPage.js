import React from 'react'
import './ErrorPage.css'
import shapes from '../../../images/shapes.png'
import { useEffect } from 'react'

function ErrorPage() {
  /*---------------Scroll to Top----------*/
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
}, []);
  return (
    <div className='error'>
        <img src={shapes} ></img>
        <p className='title'>4<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128" fill="none">
  <g clip-path="url(#clip0_457_9891)">
    <path d="M64 0C28.712 0 0 28.712 0 64C0 99.288 28.712 128 64 128C99.288 128 128 99.288 128 64C128 28.712 99.288 0 64 0ZM68.064 20.792L84.52 11.944C93.5681 15.5294 101.531 21.4006 107.632 28.984L103.712 47.08L91.16 53.232L68.064 36.408V20.792ZM43.616 11.896L60.072 20.776V36.408L36.992 53.232L24.376 47.072L20.456 28.864C26.52 21.36 34.488 15.48 43.616 11.896ZM17.84 95.632C12.616 88.032 9.216 79.096 8.28 69.44L21.824 54.728L34.176 60.768L43.48 87.192L35.616 96.616L17.84 95.632ZM78.264 118.088C73.696 119.296 68.936 120 64 120C58.032 120 52.288 119.04 46.888 117.304L41.856 101.64L49.88 92H78.152L86.032 101.328L78.264 118.088ZM92.272 96.344L84.536 87.184L93.968 60.768L106.264 54.744L119.728 69.448C118.92 77.776 116.24 85.544 112.168 92.416L92.272 96.344Z" fill="black"/>
  </g>
  <defs>
    <clipPath id="clip0_457_9891">
      <rect width="128" height="128" fill="white"/>
    </clipPath>
  </defs>
</svg>4</p>
        <p className='subtitle'>Page Not Found</p>
        <p className='paragraph'>we’re sorry. the page you requested could no be found<br></br>
Please go back to the home page</p>
    </div>
  )
}

export default ErrorPage