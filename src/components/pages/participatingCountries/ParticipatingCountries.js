import React from 'react';
import poster from "../../../images/hostMA.png"
import Matches from "../dashboard/Matches/Matches"
import "./participatingCountries.css";
import ShopCard from '../../Elements/ShopCard/ShopCard';
import '../../Elements/ShopCard/ShopCard.css'
import CountryClassement from './components/CountryClassement';
import News from '../dashboard/News/News';
import tenues from '../../../data/kits.json';
import cover from '../../../data/BackGrounds.json';
import {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
function HostCountry({addFav,FavList}) {
  /*---------------Scroll to Top----------*/
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
    const isObjectInArray = (array, objectToCheck) => {
      return array.some(item => item.code == objectToCheck.code);
    };
    
    const { team } = useParams();
    var bg;
    cover.background.map((item)=>{bg=item[team]?item[team]:poster})
    const [Country, setCountry] = useState('Morocco');
    useEffect (()=>{
        const url = `https://api-football-v1.p.rapidapi.com/v3/countries?code=${team}`;
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '4afff38393mshbe4a049d71c877bp175c89jsnabdcff598280',
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
          }
        };
        const fetchData = async () => {
            try {
              const response = await fetch(url, options);
              const result = await response.json();
              const countryData = result.response[0];
              setCountry(countryData.name);
            } catch (error) {
              console.error(error);
            }
        }
        fetchData();
    },[team])
  const kits=tenues.kits;
  const desiredKit=kits.find((element)=>(element.description.split(' ')[0]== Country))?kits.find((element)=>(element.description.split(' ')[0]== Country)):'Kit Not Available';
  return (
    <div className='hostCountry'>
      <div className='poster'>
        <img src={bg}/>
        <button className='btn-Favorite' onClick={()=>{addFav({"code":team,"name":Country})}}>
          <i class={`${isObjectInArray(FavList,{"code":team,"name":Country})?`fa-solid`:`fa-regular`} fa-heart fa-2x`}></i>
        </button>
      </div>
      <div className='info'>
        <div className='matches-shop'>
          <Matches team={Country} />
          <div className='shop-part-country'>
            <div className='standings-title'>
              <h3>Official Kit</h3>
            </div>
            {(()=>{if(desiredKit == 'Kit Not Available'){
              return(<div className='unavailable'><p id='out-of-stock'>{desiredKit}</p><i class="fa-sharp fa-solid fa-box-open fa-xl"></i></div>)
            }else{
              return(<ShopCard kit={desiredKit.Kit} price={desiredKit.Price} desc={desiredKit.description}/>)
            }})()}
          </div>
        </div>
        
        <div className='trait'></div>
        <div className='standings'>
          <div className='standings-title'>
            <h3>standings</h3>
          </div>
          <div className='standings-list'>
            <CountryClassement team={Country} />
          </div>

        </div>
        <div className='trait'></div>
        
        <div className='trait'></div>
        <News country="All"/>
      </div>

    </div >
  )
}

export default HostCountry