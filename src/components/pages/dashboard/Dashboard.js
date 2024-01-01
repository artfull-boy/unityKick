import Countdown from '../../Elements/countdown/Countdown';
import LiveScore from '../../Elements/LiveScore/LiveScore';
import HostCountries from '../dashboard/HostCountries/HostCountries';
import Teams from './Teams/Teams';
import './Dashboard.css';
import Matches from './Matches/Matches';
import Standings from './Standings/Standings';
import ShopCard from '../../Elements/ShopCard/ShopCard';
import Shop from './Shop/Shop';
import News from './News/News';
import { useEffect } from 'react';
import React from "react"
export default function Dashboard(){
    /*---------------Scroll to Top----------*/
    useEffect(() => {
      // Scroll to the top of the page when the component mounts
      window.scrollTo(0, 0);
    }, []);
    return <>
        <div className='row Cd-Ls' style={{margin:"5px",width:"99%",position:"relative"}}>
            <div className='col-12	col-sm-12	col-md-12	col-lg-12	col-xl-8	col-xxl-8'>
              <Countdown/>
            </div>
            <div className='col-12	col-sm-12	col-md-12	col-lg-12	col-xl-4	col-xxl-4'>
              <LiveScore/>
            </div>
        </div>
        <div className='row dash-content' style={{margin:"5px",width:"99%",position:"relative"}}>
            <HostCountries/>
            <Teams/>
            <Matches/>
            <div className='trait'></div>
            <Standings/>
            <div className='trait'></div>
            <Shop/>
            <div className='trait'></div>
            <News country="All"/>
        </div>
    </>
}