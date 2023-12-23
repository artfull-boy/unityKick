import React from 'react'
import hero from '../../../images/heroSpain.jpg'
import search from '../../../images/icon.svg'
import mallorca from '../../../images/mallorca.jpg'
import stadium from '../../../images/staduim.jpg'
import { Link } from 'react-router-dom'
import './hostCountries.css'

function HostCountries() {
 const [filteredData, setFilteredData] = React.useState('')
 const handleChange = (e) =>  {setFilteredData(e.target.value)}
  /*  const filterCards = () => {
    if (!filteredData) {
      return data
    }
    else {
      return data.filter(card => card.name.toLowerCase().includes(filteredData.toLowerCase()))
    }
  }
  const filteredCards = filterCards();*/
  return (
    <div className='hostcountries container-fliud'>
      <p>Spain</p>
      <img src={hero} className='img-fliud'></img>
      <div className='mainSection'>
        <div className='title'>
          <p>Cities</p>
          <div className='search'>
          <img className='icon' src={search}></img>
          <input type='text' placeholder='Type to search...' value={filteredData} onChange={handleChange}></input>
          </div>
        </div>
        <div className='cityCards'>
          <div className='cityCard'>
            <img src={mallorca} className='img-fluid'></img>
            <div className='citySection'>
            <p className='title'>Mallorca</p>
            <p className='subtitle'>Island in Spain</p>
            </div>
          </div>
          <div className='cityCard'>
            <img src={mallorca}></img>
            <div className='citySection'>
            <p className='title'>Mallorca</p>
            <p className='subtitle'>Island in Spain</p>
            </div>
          </div>
          <div className='cityCard'>
            <img src={mallorca}></img>
            <div className='citySection'>
            <p className='title'>Mallorca</p>
            <p className='subtitle'>Island in Spain</p>
            </div>
          </div>
          <div className='cityCard'>
            <img src={mallorca}></img>
            <div className='citySection'>
            <p className='title'>Mallorca</p>
            <p className='subtitle'>Island in Spain</p>
            </div>
          </div>
          <div className='cityCard'>
            <img src={mallorca}></img>
            <div className='citySection'>
            <p className='title'>Mallorca</p>
            <p className='subtitle'>Island in Spain</p>
            </div>
          </div>
          <div className='cityCard'>
            <img src={mallorca}></img>
            <div className='citySection'>
            <p className='title'>Mallorca</p>
            <p className='subtitle'>Island in Spain</p>
            </div>
          </div>
          
        </div>
        <div className='trait'></div>
        <div className='title'>
          <p>Stadiums</p>
          <div className='search'>
          <img className='icon' src={search}></img>
          <input type='text' placeholder='Type to search...'></input>
          </div>
        </div>
        <div className='staduimCards'>
          <div className='staduimCard'>
            <Link to='/Bernabeu'><img src={stadium} className='img-fluid'></img></Link>
            <Link to='/Bernabeu'><div className='staduimSection'>
            <p className='title'>Santiago Bernabeu</p>
            <p className='subtitle'>Capacity: 81,044</p>
            </div></Link>
          </div>
          <div className='staduimCard'>
            <img src={stadium} className='img-fluid'></img>
            <div className='staduimSection'>
            <p className='title'>Santiago Bernabeu</p>
            <p className='subtitle'>Capacity: 81,044</p>
            </div>
          </div>
          <div className='staduimCard'>
            <img src={stadium} className='img-fluid'></img>
            <div className='staduimSection'>
            <p className='title'>Santiago Bernabeu</p>
            <p className='subtitle'>Capacity: 81,044</p>
            </div>
          </div>
          <div className='staduimCard'>
            <img src={stadium} className='img-fluid'></img>
            <div className='staduimSection'>
            <p className='title'>Santiago Bernabeu</p>
            <p className='subtitle'>Capacity: 81,044</p>
            </div>
          </div>
          <div className='staduimCard'>
            <img src={stadium} className='img-fluid'></img>
            <div className='staduimSection'>
            <p className='title'>Santiago Bernabeu</p>
            <p className='subtitle'>Capacity: 81,044</p>
            </div>
          </div>
          <div className='staduimCard'>
            <img src={stadium} className='img-fluid'></img>
            <div className='staduimSection'>
            <p className='title'>Santiago Bernabeu</p>
            <p className='subtitle'>Capacity: 81,044</p>
            </div>
          </div>
          <div className='staduimCard'>
            <img src={stadium} className='img-fluid'></img>
            <div className='staduimSection'>
            <p className='title'>Santiago Bernabeu</p>
            <p className='subtitle'>Capacity: 81,044</p>
            </div>
          </div>
        
          
        </div>
      </div>
    </div>
  )
}

export default HostCountries