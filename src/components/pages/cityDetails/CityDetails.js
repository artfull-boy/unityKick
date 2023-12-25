import './CityDetails.css';
import { useParams } from 'react-router-dom';
import countryData from '../../../data/hostCountries.json'



export default function CityDetails(){
    const {country,city} = useParams()
    const selectedCity = countryData.countries.find(item => item.name == country).cities.find(item => item.name == city)
    return <>
        <div className='city-details'>
            <div className='city-header'>
                <h3>{country}, {city}</h3>
                <p>{selectedCity.description}:</p>
            </div>
            <div className='city-description'>
                <div className='container city-content'>
                    <div className='row'>
                        <div className='col-12 desc-img'>
                            <div className='city-desc-list'>
                                <div className='desc-list-item'>
                                    <h3>Majestic Architecture:</h3>
                                    <div className='trait'></div>
                                    <p>A harmonious blend of historic Gothic and Moorish influences graces the cityscape, showcasing intricate details and timeless beauty.</p>
                                </div>
                                <div className='desc-list-item'>
                                    <h3>Vibrant Culture:</h3>
                                    <div className='trait'></div>
                                    <p>Bustling markets, lively festivals, and a rich artistic scene contribute to the City's dynamic and welcoming atmosphere.</p>
                                </div>
                                <div className='desc-list-item'>
                                    <h3>Turquoise Waters:</h3>
                                    <div className='trait'></div>
                                    <p>The city's coastal charm is enhanced by crystal-clear waters, inviting visitors to bask in the Mediterranean sun along picturesque beaches.</p>
                                </div>
                            </div>
                            <img src={selectedCity.images[0]}></img>
                        </div>
                        <div className='col-6 col-sm-6	col-md-4 col-lg-4 col-xl-4 col-xxl-4 city-images'>
                            <img src={selectedCity.images[1]}></img>
                        </div>
                        <div className='col-6 col-sm-6	col-md-4 col-lg-4 col-xl-4 col-xxl-4 city-images'>
                            <img src={selectedCity.images[2]}></img>
                        </div>
                        <div className='col-12 col-sm-12	col-md-4 col-lg-4 col-xl-4 col-xxl-4 city-images'>
                            <img src={selectedCity.images[3]}></img>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12 city-map'>
                            <iframe src={selectedCity.location} width="100%" height="450" style={{border:"0",borderRadius:"20px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}