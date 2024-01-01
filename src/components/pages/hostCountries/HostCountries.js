import React from 'react'
import search from '../../../images/icon.svg'
import { Link, useParams } from 'react-router-dom'
import countryData from '../../../data/hostCountries.json'
import { useEffect } from 'react'
import './hostCountries.css'

function HostCountries() {
  /*---------------Scroll to Top----------*/
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
}, []);
 const [filteredDataCities, setFilteredDataCities] = React.useState('')
 const [filteredDataStadiums, setFilteredDataStadiums] = React.useState('')
 const handleChangeCities = (e) =>  {setFilteredDataCities(e.target.value)}
 const handleChangeStadiums = (e) =>  {setFilteredDataStadiums(e.target.value)}
 const {country} = useParams()
 const selectedCountry = countryData.countries.find(item => item.name == country )
 const filterCities = () => {
    if (!filteredDataCities) {
      return selectedCountry.cities
    }
    else {
      return selectedCountry.cities.filter(card => card.name.toLowerCase().includes(filteredDataCities.toLowerCase()))
    }
  }
  const filterStadiums = () => {
    if (!filteredDataStadiums) {
      return selectedCountry.stadiums
    }
    else {
      return selectedCountry.stadiums.filter(card => card.name.toLowerCase().includes(filteredDataStadiums.toLowerCase()))
    }
  }
  const cities = filterCities().map(city => (
    <div className='cityCard'>
      <Link to={`/host/${country}/city/${city.name}`}>
    <img src={city.images[0]} className='img-fluid'></img>
    <div className='citySection'>
    <p className='title'>{city.name}</p>
    <p className='subtitle'>{city.position}</p>
    </div>
  </Link>
  </div>
  ))
  const stadiums = filterStadiums().map(stadium => (
    <div className='staduimCard'>
      <Link to={`/host/${country}/stadium/${stadium.name}`}>
    <img src={stadium.images[0]} className='img-fluid'></img>
    <div className='staduimSection'>
    <p className='title'>{stadium.name}</p>
    <p className='subtitle'>Capacity: {stadium.capacity}</p>
    </div>
  </Link>
  </div>
  ))
  return (
    <div className='hostcountries container-fliud'>
      <p>{selectedCountry.name}</p>
      <img src={selectedCountry.background} className='img-fliud'></img>
      <div className='mainSection'>
        <div className='title'>
          <p>Cities</p>
          <div className='search'>
          <img className='icon' src={search}></img>
          <input type='text' placeholder='Type to search...' value={filteredDataCities} onChange={handleChangeCities}></input>
          </div>
        </div>
        <div className='cityCards'>
         {cities}
        </div>
        <div className='trait'></div>
        <div className='title'>
          <p>Stadiums</p>
          <div className='search'>
          <img className='icon' src={search}></img>
          <input type='text' placeholder='Type to search...' value={filteredDataStadiums} onChange={handleChangeStadiums}></input>
          </div>
        </div>
        <div className='staduimCards'>

        {stadiums}
        
          
        </div>
      </div>
    </div>
  )
}

export default HostCountries